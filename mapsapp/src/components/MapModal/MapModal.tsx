import React from "react";
import Box from '@mui/material/Box';
import './mapModal.scss'
import ModalInputs from './components/ModalInputs';

interface ModalProps {
  markerLat: number;
  markerLng: number;
}

const MapModal = ( { markerLat, markerLng }: ModalProps) => {
  console.log('%cMapModal.tsx line:12 markerLng', 'color: #007acc;', markerLng);

  return (
    <div className="modal">
      <Box >
        <ModalInputs lat={markerLat} lng={markerLng} />
      </Box>
    </div>
  );

}

export default MapModal;