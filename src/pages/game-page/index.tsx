import { getGameFn } from '@/libs/api/routes';
import { CollapseText, ErrorMessage, GameScreenShotsSwiper } from '@/libs/components';
import { useAppSelector } from '@/libs/store';
import { GameListResponseType, GameResponseType } from '@/libs/types';
import { formatTime, getGamesQueryKey } from '@/libs/utils';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  Grid,
  Skeleton,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

function GamePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const theme = useTheme();
  const isSmallMedia = useMediaQuery(theme.breakpoints.up('sm'));
  const filterState = useAppSelector((state) => state.gamesFilter);
  const dataFromList = queryClient
    .getQueryData<GameListResponseType>(getGamesQueryKey(filterState))
    ?.find((item) => item.id === (id ? +id : -1));
  const { data, isFetching, isError } = useQuery<GameResponseType>({
    queryFn: ({ signal }) => getGameFn(id ?? '-1', signal),
    queryKey: ['game', id],
    staleTime: 1000 * 60 * 5,
    placeholderData: {
      title: dataFromList?.title,
      publisher: dataFromList?.publisher,
      developer: dataFromList?.developer,
      thumbnail: dataFromList?.thumbnail,
      release_date: dataFromList?.release_date,
      genre: dataFromList?.genre,
    } as GameResponseType,
  });

  const getImageSize: () => { width?: number; height?: number } = () => {
    if (isSmallMedia) return { width: 365, height: 205 };
    return { width: 320, height: 180 };
  };
  const imageSize = getImageSize();

  const TypographyWrapperSkeleton = (props: {
    children: React.ReactNode;
    hasData?: boolean;
    height?: string;
    width?: string;
    sx?: SxProps<Theme>;
  }) => {
    if (props.hasData) return props.children;
    if (!isFetching) return props.children;
    return (
      <Skeleton
        height={props.height}
        width={props.width ?? '200px'}
        animation="wave"
        variant="text"
        sx={[
          { bgcolor: 'var(--skeleton-color)' },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      />
    );
  };

  if (isError)
    return (
      <Box marginTop={'100px'}>
        <ErrorMessage />
      </Box>
    );

  return (
    <Grid>
      <Grid>
        <Box>
          <TypographyWrapperSkeleton
            height="48px"
            sx={{
              margin: '24px 0px 16px 0px',
              marginLeft: { xl: '11.5%', lg: '11%', md: '7.3%', sm: '6.2%', smx: '7.2%' },
            }}
            hasData={!!data?.title}
          >
            <Grid container justifyContent={'center'}>
              <Typography
                sx={{
                  width: { md: '720px', sm: '480px', xs: '320px' },
                  margin: '24px 0px 16px 0px',
                }}
                variant="h5"
              >
                {data?.title}
              </Typography>
            </Grid>
          </TypographyWrapperSkeleton>
          <GameScreenShotsSwiper screenshots={data?.screenshots} gameTitle={data?.title} />
        </Box>
        <Grid
          container
          direction={'row'}
          alignItems={'center'}
          gap={'32px'}
          marginTop={'44px'}
          justifyContent={'center'}
        >
          {!isFetching || data?.thumbnail ? (
            <img
              src={data?.thumbnail}
              alt={`game ${data?.title} thumbnail`}
              width={imageSize.width}
              height={imageSize.height}
            />
          ) : (
            <Skeleton
              width={'365px'}
              height={'205px'}
              animation="wave"
              variant="rectangular"
              sx={{ bgcolor: 'var(--skeleton-color)' }}
            />
          )}
          <Box width={{ md: '400px', sm: '365px', xs: '320px' }}>
            <Grid container direction={'row'} wrap="nowrap" justifyContent={'space-between'}>
              <Typography variant="body2">Издатель:</Typography>
              <TypographyWrapperSkeleton hasData={!!data?.publisher}>
                <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                  {data?.publisher}
                </Typography>
              </TypographyWrapperSkeleton>
            </Grid>
            <Grid
              container
              direction={'row'}
              wrap="nowrap"
              justifyContent={'space-between'}
              marginTop={'4px'}
            >
              <Typography variant="body2">Разработчик:</Typography>
              <TypographyWrapperSkeleton hasData={!!data?.developer}>
                <Typography variant="body2" color={(theme) => theme.palette.blueBase.main}>
                  {data?.developer}
                </Typography>
              </TypographyWrapperSkeleton>
            </Grid>
            <Grid
              container
              direction={'row'}
              wrap="nowrap"
              justifyContent={'space-between'}
              marginTop={'24px'}
            >
              <Typography variant="body2">Дата выхода:</Typography>
              <TypographyWrapperSkeleton hasData={!!data?.release_date}>
                <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                  {formatTime(data?.release_date)}
                </Typography>
              </TypographyWrapperSkeleton>
            </Grid>
            <Grid
              container
              direction={'row'}
              wrap="nowrap"
              justifyContent={'space-between'}
              marginTop={'4px'}
            >
              <Typography variant="body2">Жанр:</Typography>
              <TypographyWrapperSkeleton hasData={!!data?.genre}>
                <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                  {data?.genre}
                </Typography>
              </TypographyWrapperSkeleton>
            </Grid>
          </Box>
        </Grid>
        <Grid container direction={'row'} gap={'32px'} marginTop={'24px'} justifyContent={'center'}>
          <Box sx={{ width: '365px' }}>
            <Divider variant="gradient" />
            {!isFetching ? (
              <CollapseText text={data?.description} />
            ) : (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={'100%'}
                height={'400px'}
                sx={{ bgcolor: 'var(--skeleton-color)', marginTop: '8px' }}
              />
            )}
          </Box>
          <Box sx={{ width: { md: '400px', sm: '365px', sx: '320px' } }}>
            <Typography sx={{ marginTop: '8px' }}>Минимальные системные требования</Typography>
            <Grid marginTop={'8px'} container direction={'column'} gap={'16px'}>
              <Box>
                <Typography
                  variant="body2"
                  color={(theme) => theme.palette.blueBase.main}
                  sx={{ marginBottom: '4px' }}
                >
                  Операционная система
                </Typography>
                <TypographyWrapperSkeleton width="300px">
                  <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                    {data?.minimum_system_requirements
                      ? data?.minimum_system_requirements.os
                      : 'unknown'}
                  </Typography>
                </TypographyWrapperSkeleton>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  color={(theme) => theme.palette.blueBase.main}
                  sx={{ marginBottom: '4px' }}
                >
                  Процессор
                </Typography>
                <TypographyWrapperSkeleton width="300px">
                  <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                    {data?.minimum_system_requirements
                      ? data?.minimum_system_requirements.processor
                      : 'unknown'}
                  </Typography>
                </TypographyWrapperSkeleton>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  color={(theme) => theme.palette.blueBase.main}
                  sx={{ marginBottom: '4px' }}
                >
                  Видеокарта
                </Typography>
                <TypographyWrapperSkeleton width="300px">
                  <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                    {data?.minimum_system_requirements
                      ? data?.minimum_system_requirements.graphics
                      : 'unknown'}
                  </Typography>
                </TypographyWrapperSkeleton>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  color={(theme) => theme.palette.blueBase.main}
                  sx={{ marginBottom: '4px' }}
                >
                  Оперативная память
                </Typography>
                <TypographyWrapperSkeleton width="300px">
                  <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                    {data?.minimum_system_requirements
                      ? data?.minimum_system_requirements.memory
                      : 'unknown'}
                  </Typography>
                </TypographyWrapperSkeleton>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  color={(theme) => theme.palette.blueBase.main}
                  sx={{ marginBottom: '4px' }}
                >
                  Свободное место на диске
                </Typography>
                <TypographyWrapperSkeleton width="300px">
                  <Typography variant="body2" color={(theme) => theme.palette.whiteDim.main}>
                    {data?.minimum_system_requirements
                      ? data?.minimum_system_requirements.storage
                      : 'unknown'}
                  </Typography>
                </TypographyWrapperSkeleton>
              </Box>
            </Grid>
          </Box>
          <Button
            onClick={() => {
              navigate('/');
            }}
            variant="outlined"
            sx={{ fontSize: '20px' }}
          >
            Назад на главную страницу
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GamePage;
