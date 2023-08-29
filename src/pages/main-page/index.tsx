import { GamesFilter, PopularSwiper } from '@/libs/components';
import { BASE_ROOT_URL } from '@/libs/constants';
import { Box, Typography } from '@mui/material';

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
          <Typography sx={{ marginLeft: '114px', marginBottom: '24px' }} variant="h6">
            Featured & Popular
          </Typography>
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
