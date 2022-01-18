import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './Map.scss'

mapboxgl.accessToken = "pk.eyJ1IjoibWFraGl0ciIsImEiOiJja3h4a3ViNGMwamd5Mm9ycTB2NjM5ZGhjIn0.ZLAA9nNM-a2DTiWN1YrGHQ"


const Map = () => {

  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;
    const mapboxMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return (

    <div ref={mapNode} className="map-container" />

  )
}

export default Map;


