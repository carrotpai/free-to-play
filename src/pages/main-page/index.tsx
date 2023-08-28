import { GamesFilter, PopularSwiper } from '@/libs/components';
import { Box, Grid, Typography } from '@mui/material';

function MainPage() {
  return (
    <Grid margin={'0 auto'} width={'50%'}>
      <Box
        sx={{
          background: 'url("http://localhost:5173/assets/cluster_bg.png") bottom center no-repeat',
          paddingBottom: '100px',
        }}
      >
        <Box>
          <Typography>Featured & Popular</Typography>
          <PopularSwiper />
        </Box>
      </Box>
      <Box>
        <Typography>Categories</Typography>
        <PopularSwiper />
      </Box>
      <Box>
        <Typography>Browse games</Typography>
        <GamesFilter />
      </Box>
    </Grid>
  );
}

export default MainPage;
