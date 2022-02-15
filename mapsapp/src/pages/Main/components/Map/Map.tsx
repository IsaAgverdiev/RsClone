import React, { useState, useRef, useEffect } from "react";
import mapboxgl, { MapMouseEvent } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './Map.scss'
import "../../../../components/MapModal/mapModal.scss"
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import ModalInputs from "../../../../components/MapModal/components/ModalInputs";

mapboxgl.accessToken = "pk.eyJ1IjoibWFraGl0ciIsImEiOiJja3h4a3ViNGMwamd5Mm9ycTB2NjM5ZGhjIn0.ZLAA9nNM-a2DTiWN1YrGHQ"

interface MapboxMapProps {
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">;
  onCreated?(map: mapboxgl.Map): void;
  onLoaded?(map: mapboxgl.Map): void;
  onRemoved?(): void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


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


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleClick = (event: React.MouseEvent) => {
    if (event.button === 2) {
      handleOpen()
    }
  }

  const setCoordinates = (event: MapMouseEvent) => {
    let coordinates = event.lngLat
    setLng(coordinates.lng)
    setLat(coordinates.lat)
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
    if (onCreated) onCreated(mapboxMap);
    if (onLoaded) mapboxMap.once("load", () => onLoaded(mapboxMap));


    if (mapboxMap) {
      mapboxMap.on('move', () => {
        setLng(+(mapboxMap.getCenter().lng.toFixed(4)));
        setLat(+(mapboxMap.getCenter().lat.toFixed(4)));
        setZoom(+(mapboxMap.getZoom().toFixed(2)));
      });
      mapboxMap.on('mousedown', setCoordinates)
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
      <div ref={mapNode} className="map-container" onMouseDown={handleClick} >
        
        {/* onContextMenu={(e) => e.preventDefault()} */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <ModalInputs lat={lat} lng={lng} closeModal={handleClose}/>
          </Box>
        </Modal>

      </div>
    </>
  )
}

export default Map;