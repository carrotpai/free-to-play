import { Button, Grid } from '@mui/material';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import PopularSwiperSlide from '../popular-swiper-slide';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { ReactComponent as ArrowIcon } from '@/assets/icons/swiper-arrow.svg';
import TempImage1 from '@/assets/gameTemplate.jpg';
import TempImage2 from '@/assets/baldursGate.jpg';
import TempImage3 from '@/assets/eldenRing.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const tempPopularGames = [
  { name: 'Honkai: Star rail', imgUrl: TempImage1 },
  { name: 'Honkai: Star rail', imgUrl: TempImage2 },
  { name: 'Honkai: Star rail', imgUrl: TempImage3 },
];

function PopularSwiper() {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      wrap="nowrap"
      gap={{ lg: '24px', md: '12px', sm: '8px', xs: '8px' }}
    >
      <Button
        onClick={() => {
          swiperRef.current?.swiper.slidePrev();
        }}
        variant="swiper"
        sx={{
          padding: { xs: '0px', md: '8px' },
          minWidth: { lg: '64px', md: '48px', sm: '24px', xs: '16px' },
          minHeight: '64px',
          display: { smx: 'inline-flex', xs: 'none' },
        }}
      >
        <ArrowIcon />
      </Button>
      <Grid
        width={{ md: '720px', sm: '470px', xs: '320px' }}
        height={{ md: '405px', sm: '260px', xs: '180px' }}
        sx={{ boxShadow: '0px 2px 12px 2px rgba(0, 0, 0, .5)' }}
      >
        <Swiper
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          ref={swiperRef}
          effect="fade"
          modules={[EffectFade, Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {tempPopularGames.map((game, i) => (
            <SwiperSlide key={`pop-slide-${i}`}>
              <PopularSwiperSlide {...game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Button
        onClick={() => {
          swiperRef.current?.swiper.slideNext();
        }}
        variant="swiper"
        sx={{
          transform: 'rotate(180deg)',
          padding: { xs: '0px', md: '8px' },
          minWidth: { lg: '64px', md: '48px', sm: '24px', xs: '16px' },
          minHeight: '64px',
          display: { smx: 'inline-flex', xs: 'none' },
        }}
      >
        <ArrowIcon />
      </Button>
    </Grid>
  );
}

export default PopularSwiper;
