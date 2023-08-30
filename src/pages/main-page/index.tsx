import { GamesFilter, PopularSwiper } from '@/libs/components';
import { BASE_ROOT_URL } from '@/libs/constants';
import { Box, Grid, Typography } from '@mui/material';

function MainPage() {
  return (
    <>
      <Box
        sx={{
          background: {
            xl: `url("${BASE_ROOT_URL}/assets/cluster_bg.png") bottom center no-repeat`,
          },
          paddingBottom: '100px',
        }}
      >
        <Box marginTop={'64px'}>
          <Grid container justifyContent={'center'}>
            <Typography
              sx={{
                width: { md: '720px', sm: '480px', xs: '320px' },
                marginBottom: '24px',
              }}
              variant="h6"
            >
              Featured & Popular
            </Typography>
          </Grid>
          <PopularSwiper />
        </Box>
      </Box>
      <Box>
        <GamesFilter />
      </Box>
    </>
  );
}

export default MainPage;
