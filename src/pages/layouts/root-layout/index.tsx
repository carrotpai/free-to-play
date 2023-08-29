import { Footer, Header } from '@/libs/components';
import { Box, Grid } from '@mui/material';
import { Outlet } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
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
      <Grid margin={'0 auto'} width={{ xl: '50%', md: '800px', sm: '500px', xs: '320px' }}>
        <Outlet />
      </Grid>
      <Footer />
      <ScrollRestoration
        getKey={(location, _) => {
          return location.pathname === '/' ? location.pathname : location.key;
        }}
      />
    </Box>
  );
}

export default RootLayout;
