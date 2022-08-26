import React from 'react';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import Resume from '../../Resume-Web.pdf';

const Modal = ({modalOpen, toggleModal}) => {

    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '90%',
    display: 'block',
    p: 4,
    };
  
    return (
        <MuiModal open={modalOpen} onClose={toggleModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <iframe src={Resume} width='100%' height='100%' frameborder="0"></iframe>
          </Box>
        </MuiModal>
    )
  }
  
  export default Modal

