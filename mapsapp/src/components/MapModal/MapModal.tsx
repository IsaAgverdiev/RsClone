import React from "react";
import ReactDom from "react-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
  modalOpen: boolean
}

const MapModal = ({modalOpen}: MapModalProps) => {
  
  const [open, setOpen] = React.useState(modalOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
console.log('%cMapModal.tsx line:29 open', 'color: #007acc;', open);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalInputs lat={0} lng={0} />
      </Box>
 
    </Modal>
  );
}

export default MapModal;