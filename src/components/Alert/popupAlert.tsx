import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from 'react';

function MainButton() {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">Text in a modal</h2>
        <p id="parent-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        {/* <ChildModal /> */}
      </Box>
    </Modal>
  );
}
export default MainButton;
