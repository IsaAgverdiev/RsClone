import React from "react";
import ReactDom from "react-dom";
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

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const MapModal = ({open, onClose}:  ModalProps) => {

  return ReactDom.createPortal(
    <div className="modal" >
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
          <ModalInputs />
        </Box>
      </Modal>
    </div>
    ,
    modalRoot
  );
}

export default MapModal;