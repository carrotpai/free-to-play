import { Grid, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Grid
      marginTop={'24px'}
      sx={{ borderTop: '1px solid rgba(255,255,255, 0.2)' }}
      width={'100%'}
      height={'100px'}
      container
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography>Footer Template</Typography>
    </Grid>
  );
}

export default Footer;
