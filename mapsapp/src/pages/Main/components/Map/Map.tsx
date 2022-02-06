import React, { useState, useRef, useEffect } from "react";
import mapboxgl, { LngLat, MapMouseEvent } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './Map.scss'
import AddPointsEl from "../../../../components/AddPointsEl";
import ReactDOM from "react-dom";
import * as PointsActions from '../../../../store/actions/pointsActions';
import { Provider } from "react-redux";
import store from "../../../../store/store";


mapboxgl.accessToken = "pk.eyJ1IjoibWFraGl0ciIsImEiOiJja3h4a3ViNGMwamd5Mm9ycTB2NjM5ZGhjIn0.ZLAA9nNM-a2DTiWN1YrGHQ"

interface MapboxMapProps {
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">;
  onCreated?(map: mapboxgl.Map): void;
  onLoaded?(map: mapboxgl.Map): void;
  onRemoved?(): void;
}

const Map = ({
  initialOptions = {},
  onCreated,
  onLoaded,
  onRemoved,
}: MapboxMapProps) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);
  const [lng, setLng] = useState(37.60);
  const [lat, setLat] = useState(55.73);
  const [zoom, setZoom] = useState(10);
  const [pointOpen, setPointOpen] = useState(true)


  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;
    const mapboxMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      ...initialOptions
    });

    setMap(mapboxMap);
    if (onCreated) onCreated(mapboxMap);
    if (onLoaded) mapboxMap.once("load", () => onLoaded(mapboxMap));


    if (mapboxMap) {
      mapboxMap.on('move', () => {
        setLng(+(mapboxMap.getCenter().lng.toFixed(4)));
        setLat(+(mapboxMap.getCenter().lat.toFixed(4)));
        setZoom(+(mapboxMap.getZoom().toFixed(2)));
      });

      const addPopup = (event: MapMouseEvent) => {

   
        const coordinates = event.lngLat;
        const popupNode = document.createElement("div")

    
          ReactDOM.render(
            <Provider store={store}>
              <AddPointsEl markerLng={coordinates.lng} markerLat={coordinates.lat}  />
            </Provider>
            ,
            popupNode
          )
        

        const popup = new mapboxgl.Popup({ closeOnClick: true, focusAfterOpen: true })
          .setLngLat(coordinates)
          .setDOMContent(popupNode);

        popup.addTo(mapboxMap)

        const marker = new mapboxgl.Marker({ draggable: true })
        marker.setLngLat(coordinates);
        marker.addTo(mapboxMap);
      }
      mapboxMap.on('click', addPopup)
    }

    return () => {
      mapboxMap.remove();
      setMap(undefined);
      if (onRemoved) onRemoved();
    };

  }, []);

  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapNode} className="map-container"  >
      </div>
    </>
  )
}

export default Map;