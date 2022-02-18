import React, { useState, useRef, useEffect } from "react";
import mapboxgl, { Map, MapMouseEvent, Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { showPoints } from "../../firebase";
import MapModal from "../MapModal";


mapboxgl.accessToken = "pk.eyJ1IjoibWFraGl0ciIsImEiOiJja3h4a3ViNGMwamd5Mm9ycTB2NjM5ZGhjIn0.ZLAA9nNM-a2DTiWN1YrGHQ"

interface MapboxMapProps {
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">;
  onCreated?(map: mapboxgl.Map): void;
  onLoaded?(map: mapboxgl.Map): void;
  onRemoved?(): void;
}

const MapComponent = ({ initialOptions = {}, onCreated, onLoaded, onRemoved }: MapboxMapProps) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);
  const [lng, setLng] = useState(37.60);
  const [lat, setLat] = useState(55.73);
  const [modalX, setModalX] = useState(0);
  const [modalY, setModalY] = useState(0);
  const [pointLng, setPointLng] = useState(0);
  const [pointLat, setPointLat] = useState(0);
  const [zoom, setZoom] = useState(10);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setModalCoordinates(event)
    handleOpen()
  }

  const setMapCoordinates = (event: MapMouseEvent) => {
    let coordinates = event.lngLat
    setPointLng(coordinates.lng)
    setPointLat(coordinates.lat)
  }

  const setModalCoordinates = (event: React.MouseEvent) => {
    setModalX(event.clientX);
    setModalY(event.clientY);
  }

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

    if (onCreated) mapboxMap.once("load", () => {
      onCreated(mapboxMap)
    });

    if (onLoaded) mapboxMap.once("load", () => {
      let data = showPoints();
      data.then(points => {
        points.map((point) => {
          const marker = new mapboxgl.Marker()
            .setLngLat([point.lng, point.lat])
            .addTo(mapboxMap);
        })
      });
      onLoaded(mapboxMap)
    });

    if (mapboxMap) {
      mapboxMap.on('move', () => {
        setLng(+(mapboxMap.getCenter().lng.toFixed(4)));
        setLat(+(mapboxMap.getCenter().lat.toFixed(4)));
        setZoom(+(mapboxMap.getZoom().toFixed(2)));
      });

      mapboxMap.on('contextmenu', setMapCoordinates);
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
      <div ref={mapNode} className="map-container"
        onContextMenu={handleClick}
      >
        <MapModal
          lat={pointLat}
          lng={pointLng}
          open={open}
          close={handleClose}
          modalX={modalX}
          modalY={modalY}
          map={map}
           />

      </div>
    </>
  )
}

export default MapComponent;