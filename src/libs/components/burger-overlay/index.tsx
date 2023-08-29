import { Box } from '@mui/material';
import React from 'react';

interface BurgerOverlayProps {
  handleClose: () => void;
}

function BurgerOverlay({ handleClose }: BurgerOverlayProps) {
  return (
    <Box
      sx={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0 }}
      component={'div'}
      onClick={handleClose}
    />
  );
}

export default BurgerOverlay;
