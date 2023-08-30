import { Button, Grid, Skeleton, useMediaQuery } from '@mui/material';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as ArrowIcon } from '@/assets/icons/swiper-arrow.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface GameScreenShotsSwiperProps {
  gameTitle?: string;
  screenshots?: Array<{ id: number; image: string }>;
}

function GameScreenShotsSwiper({ screenshots, gameTitle }: GameScreenShotsSwiperProps) {
  const theme = useTheme();
  const swiperRef = useRef<SwiperRef>(null);
  const isMediumMedia = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallMedia = useMediaQuery(theme.breakpoints.up('sm'));

  const getImageSize: () => { width?: number; height?: number } = () => {
    if (isMediumMedia) return { width: 720, height: 405 };
    if (isSmallMedia) return { width: 470, height: 260 };
    return { width: 320, height: 180 };
  };
  const getArrowIconSize: () => { width?: number; height?: number } = () => {
    if (isMediumMedia) return { width: 24, height: 38 };
    if (isSmallMedia) return { width: 17, height: 28 };
    return { width: 14, height: 24 };
  };
  const imageSize = getImageSize();
  const arrowSize = getArrowIconSize();
  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      wrap="nowrap"
      gap={{ lg: '24px', md: '12px', sm: '8px', xs: '8px' }}
      width={'100%'}
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
        <ArrowIcon width={arrowSize.width} height={arrowSize.height} />
      </Button>
      <Grid
        width={{ md: '720px', sm: '470px', xs: '320px' }}
        height={{ md: '405px', sm: '260px', xs: '180px' }}
        sx={{ boxShadow: '0px 2px 12px 4px rgba(0, 0, 0, .5)' }}
      >
        {screenshots ? (
          <Swiper
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            ref={swiperRef}
            effect="fade"
            modules={[EffectFade, Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {screenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.id}>
                <img
                  src={screenshot.image}
                  alt={`screenshot game ${gameTitle}`}
                  width={imageSize.width}
                  height={imageSize.height}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={'100%'}
            sx={{
              bgcolor: 'var(--skeleton-color)',
              height: { md: '405px', sm: '260px', xs: '180px' },
            }}
          />
        )}
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
        <ArrowIcon width={arrowSize.width} height={arrowSize.height} />
      </Button>
    </Grid>
  );
}

export default GameScreenShotsSwiper;
