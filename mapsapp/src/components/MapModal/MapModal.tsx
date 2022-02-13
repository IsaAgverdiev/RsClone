import React from "react";
import './mapModal.scss'
import ModalInputs from './components/ModalInputs';

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