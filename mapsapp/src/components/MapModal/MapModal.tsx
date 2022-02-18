import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './mapModal.scss'
import ModalInputs from './components/ModalInputs';
import mapboxgl from "mapbox-gl";

const style = {
  position: 'absolute' as 'absolute',
  width: 400,
  height: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface MapModalProps {
  open: boolean;
  close: () => void;
  lat: number;
  lng: number
  modalX: number;
  modalY: number;
  map?: mapboxgl.Map ;
}

const MapModal = ({ open, close, lat, lng, modalX, modalY, map }: MapModalProps) => {

  const setModalPosition = () => {
    let modalPosition = {
      left: modalX - 2,
      top: modalY - 2,
    }
    if (modalY > (window.innerHeight - style.height)) {
      modalPosition.top = modalY - style.height + 2;
    }
    if (modalX > window.innerWidth - style.width) {
      modalPosition.left = modalX - style.width + 2;
    }
    return modalPosition
  }

  let position = setModalPosition()

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"

    >
      <Box sx={style} style={position}
        onMouseLeave={close}>
        <ModalInputs lat={lat} lng={lng} closeModal={close} map={map} />
      </Box>
    </Modal>
  );
}

export default MapModal;