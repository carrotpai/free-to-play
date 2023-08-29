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
      maxWidth={{ md: '720px', sm: '470px', xs: '320px' }}
      maxHeight={{ md: '405px', sm: '260px', xs: '180px' }}
    />
  );
}

export default PopularSwiperSlide;
