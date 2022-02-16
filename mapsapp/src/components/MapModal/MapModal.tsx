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
}

const MapModal = ({open, close, lat, lng}: MapModalProps ) => {

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalInputs lat={lat} lng={lng} closeModal={close} />
      </Box>
    </Modal>
  );
}

export default MapModal;