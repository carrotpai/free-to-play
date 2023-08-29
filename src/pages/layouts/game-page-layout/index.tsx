import { Box } from '@mui/material';
import { Outlet } from 'react-router';

function GamePageLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default GamePageLayout;
