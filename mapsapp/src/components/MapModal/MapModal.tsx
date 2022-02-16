import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './mapModal.scss'
import ModalInputs from './components/ModalInputs';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
}

const MapModal = ({ open, close, lat, lng, modalX, modalY }: MapModalProps) => {


  const setModalPosition = () => {
    let modalPosition = {
      left: modalX + style.width / 2,
      top: modalY + style.height / 2,
    }
    if (modalY > (window.innerHeight - style.height)) {
      modalPosition.top = modalY - style.height / 2 ;
    } 
    if (modalX > window.innerWidth - style.width) {
      modalPosition.left = modalX - style.width / 2
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
      <Box sx={style} style={position} >
        <ModalInputs lat={lat} lng={lng} closeModal={close} />
      </Box>
    </Modal>
  );
}

export default MapModal;