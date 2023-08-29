import React from 'react';
import GamesListItem from '../games-list-item';
import { FixedSizeList as List } from 'react-window';
import { useQuery } from '@tanstack/react-query';
import { getGamesFn } from '@/libs/api/routes';
import { GamesFilterData } from '@/libs/store';
import { GameListResponseType } from '@/libs/types';
import { getGamesQueryKey } from '@/libs/utils';
import { Grid, Skeleton, Typography } from '@mui/material';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ErrorMessage } from '..';

interface GamesListProps {
  queryArgs?: GamesFilterData;
}

function GamesList({ queryArgs }: GamesListProps) {
  const { data, isLoading, isError } = useQuery<GameListResponseType>({
    queryFn: ({ signal }) => getGamesFn(queryArgs, signal),
    queryKey: getGamesQueryKey(queryArgs),
    staleTime: 1000 * 60 * 3,
  });

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) =>
    data ? (
      <GamesListItem
        id={data[index].id}
        style={style}
        title={data[index].title}
        releaseDate={data[index].release_date}
        publisherTitle={data[index].publisher}
        thumbnail={data[index].thumbnail}
        category={data[index].genre}
      />
    ) : null;

  if (isLoading)
    return (
      <Grid container direction={'column'} gap={'16px'} marginTop={'32px'}>
        {Array(8)
          .fill(1)
          .map((_, i) => (
            <Skeleton
              key={`skeleton-${i}`}
              animation="wave"
              variant="rectangular"
              sx={{ bgcolor: 'var(--skeleton-color)' }}
              height={'80px'}
            />
          ))}
      </Grid>
    );

  if (isError) return <ErrorMessage />;

  return data.length ? (
    <AutoSizer disableHeight>
      {({ width }) => (
        <List
          className="games-list"
          height={900}
          width={width}
          itemSize={96}
          itemCount={data?.length ?? 0}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  ) : (
    <Grid container justifyContent={'center'}>
      <Typography>Пусто!</Typography>
    </Grid>
  );
}

export default GamesList;
