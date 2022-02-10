import React from "react";
import ReactModal from 'react-modal';
import './modal.scss'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
interface ModalLoadProps {
    isOpen: boolean;
    
  }

ReactModal.setAppElement('#root');
const Modal = ({isOpen}:ModalLoadProps) =>{
  return<ReactModal
    isOpen={isOpen}
    className='modal'>
     <Box sx={{ display: 'flex' }}>
          <CircularProgress />
      </Box>
  </ReactModal>
}
export default Modal;
