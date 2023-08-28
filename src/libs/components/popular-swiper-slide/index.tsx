import { Box } from '@mui/material';

interface PopularSwiperSlideProps {
  name: string;
  imgUrl: string;
}

function PopularSwiperSlide({ name, imgUrl }: PopularSwiperSlideProps) {
  return (
    <Box
      component="img"
      alt={`game ${name}`}
      src={imgUrl}
      sx={{
        maxHeight: { xs: 233, md: 480 },
        maxWidth: { xs: 350, md: 720 },
      }}
    />
  );
}

export default PopularSwiperSlide;
