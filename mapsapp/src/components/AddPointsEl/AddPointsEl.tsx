import React from "react";
import ModalInputs from './components/AddPointsInputs';

interface ModalProps {
  markerLat: number;
  markerLng: number;
}

const MapModal = ({ markerLat, markerLng }: ModalProps) => {

  return (
    <ModalInputs lat={markerLat} lng={markerLng} />
  );

}

export default MapModal;