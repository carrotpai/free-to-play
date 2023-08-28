import { Footer, Header } from '@/libs/components';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { ru } from 'date-fns/locale';

setDefaultOptions({ locale: ru });

function RootLayout() {
  return (
    <Box
      component={'main'}
      sx={{
        backgroundColor: (theme) => theme.palette.darkBlue.main,
        minHeight: '100vh',
        color: (theme) => theme.palette.whiteBase.main,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default RootLayout;
