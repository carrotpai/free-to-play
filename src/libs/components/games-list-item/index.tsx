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
          height={82}
          container
          direction={'row'}
          justifyContent={'space-between'}
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
          <Grid container direction={'row'} gap={'12px'} alignItems={'center'} wrap="nowrap">
            <img src={thumbnail} alt={`game thumbnail ${title}`} width={160} height={80} />
            <Box>
              <Typography>{title}</Typography>
              <Typography sx={{ fontSize: '16px', color: (theme) => theme.palette.whiteDim.main }}>
                {category}
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            direction={'column'}
            wrap="nowrap"
            justifyContent={'center'}
            width={'30%'}
          >
            <Typography fontSize={'16px'} color={(theme) => theme.palette.blueBase.main}>
              {formatTime(releaseDate) ?? 'unknown date'}
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.whiteDim.main,
                marginTop: '8px',
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
