import { Button, Grid } from '@mui/material';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import PopularSwiperSlide from '../popular-swiper-slide';
import { Pagination, EffectFade } from 'swiper/modules';
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
      gap={'24px'}
      width={'100%'}
    >
      <Button
        onClick={() => {
          swiperRef.current?.swiper.slidePrev();
        }}
        variant="swiper"
      >
        <ArrowIcon />
      </Button>
      <Grid width={'720px'}>
        <Swiper
          loop
          ref={swiperRef}
          effect="fade"
          modules={[EffectFade, Pagination]}
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
        sx={{ transform: 'rotate(180deg)' }}
      >
        <ArrowIcon />
      </Button>
    </Grid>
  );
}

export default PopularSwiper;
