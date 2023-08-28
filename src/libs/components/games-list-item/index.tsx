import { GameListItemType } from '@/libs/types';
import { Box, Grid, Typography } from '@mui/material';
import { format, parse } from 'date-fns';
import React from 'react';

interface GamesListItemProps extends GameListItemType {
  style: React.CSSProperties;
}

function GamesListItem({
  title,
  releaseDate,
  publisherTitle,
  category,
  thumbnail,
  style,
}: GamesListItemProps) {
  return (
    <Grid style={style} container alignItems={'center'}>
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
            <Typography sx={{ width: '300px' }}>{title}</Typography>
            <Typography sx={{ fontSize: '16px', color: (theme) => theme.palette.whiteDim.main }}>
              {category}
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{ width: '300px' }}
          container
          direction={'column'}
          wrap="nowrap"
          justifyContent={'center'}
        >
          <Typography>
            {format(parse(releaseDate, 'yyyy-MM-dd', new Date()), 'd MMMM yyyy')}
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
    </Grid>
  );
}

export default GamesListItem;
