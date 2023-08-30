import { Box } from '@mui/material';

interface BurgerOverlayProps {
  handleClose: () => void;
}

function BurgerOverlay({ handleClose }: BurgerOverlayProps) {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }}
      component={'div'}
      onClick={handleClose}
    />
  );
}

export default BurgerOverlay;
