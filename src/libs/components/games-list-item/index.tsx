import { paths } from '@/app/routes/paths';
import { GameListItemType } from '@/libs/types';
import { formatTime } from '@/libs/utils';
import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';

interface GamesListItemProps extends GameListItemType {
  id: number;
  style: React.CSSProperties;
}

function GamesListItem({
  id,
  title,
  releaseDate,
  publisherTitle,
  category,
  thumbnail,
  style,
}: GamesListItemProps) {
  return (
    <Box style={style}>
      <Link
        href={`${paths.game.index}/${id}`}
        sx={{ display: 'block', width: '100%' }}
        underline="none"
        color={(theme) => theme.palette.whiteBase.main}
      >
        <Grid
          height={{ sm: 82, xs: 134 }}
          container
          direction={{ sm: 'row', xs: 'column' }}
          gap={{ md: 'auto', sm: '12px', xs: '4px' }}
          justifyContent={{ sm: 'space-between' }}
          wrap="nowrap"
          sx={{
            background: 'rgba( 0, 0, 0, 0.2 )',
            border: '1px solid rgba( 139, 185, 224, 0 )',
            cursor: 'pointer',
            ':hover': {
              border: '1px solid rgba( 139, 185, 224, 0.2 )',
              background: 'rgba( 0, 0, 0, 0.2 );',
            },
          }}
        >
          <Grid
            container
            direction={'row'}
            gap={{ sm: '12px', xs: '8px' }}
            alignItems={'center'}
            wrap="nowrap"
          >
            <Box
              component={'img'}
              src={thumbnail}
              alt={`game thumbnail ${title}`}
              width={160}
              height={80}
              minWidth={160}
              minHeight={80}
            />
            <Box>
              <Typography fontSize={{ md: '20px', xs: '16px' }}>{title}</Typography>
              <Typography
                fontSize={{ md: '16px', xs: '14px' }}
                sx={{
                  color: (theme) => theme.palette.whiteDim.main,
                  marginTop: { sm: '2px', xs: '4px' },
                }}
              >
                {category}
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            flexGrow={1}
            direction={{ sm: 'column', xs: 'row' }}
            wrap="nowrap"
            alignItems={{ xs: 'center' }}
            justifyContent={{ sm: 'center' }}
            paddingRight={{ md: 'auto', sm: '12px' }}
            width={{ md: '31%', sm: '35%', xs: '100%' }}
          >
            <Typography
              width={{ xs: '168px', sm: '100%' }}
              textAlign={{ xs: 'center', sm: 'left' }}
              fontSize={{ md: '16px', xs: '14px' }}
              color={(theme) => theme.palette.blueBase.main}
            >
              {formatTime(releaseDate) ?? 'unknown date'}
            </Typography>
            <Typography
              width={{ sm: '100%', xs: '45%' }}
              fontSize={{ md: '16px', xs: '14px' }}
              sx={{
                color: (theme) => theme.palette.whiteDim.main,
                marginTop: { md: '8px', sm: '4px', xs: '0px' },
              }}
            >
              {publisherTitle}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
}

export default GamesListItem;
