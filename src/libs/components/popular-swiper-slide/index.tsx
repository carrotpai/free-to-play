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
      width={{ md: '720px', sm: '480px', xs: '320px' }}
      height={{ md: '405px', sm: '290px', xs: '180px' }}
      maxWidth={{ md: '720px', sm: '480px', xs: '320px' }}
      maxHeight={{ md: '405px', sm: '290px', xs: '180px' }}
    />
  );
}

export default PopularSwiperSlide;
