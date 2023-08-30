import React from 'react';
import GamesListItem from '../games-list-item';
import { GamesFilterData } from '@/libs/store';
import { Grid, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AutoSizer, List, ScrollParams } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { ErrorMessage } from '..';
import { useGamesListQuery } from '@/libs/hooks';

interface GamesListProps {
  queryArgs?: GamesFilterData;
}

function GamesList({ queryArgs }: GamesListProps) {
  const theme = useTheme();
  const isSmMedia = useMediaQuery(theme.breakpoints.up('sm'));
  const scrollTopRef = React.useRef<string>('0');
  const [scrollOffset, setScrollOffset] = React.useState<number | undefined>(undefined);
  const { data, isLoading, isError } = useGamesListQuery(queryArgs);

  React.useEffect(() => {
    const scrollTop = localStorage.getItem('gameListScroll');
    if (scrollTop !== null) {
      localStorage.removeItem('gameListScroll');
      setScrollOffset(+scrollTop);
    }
    return () => localStorage.setItem('gameListScroll', scrollTopRef.current);
  }, []);

  React.useEffect(() => {
    if (scrollOffset !== undefined) {
      setScrollOffset(undefined);
    }
  }, [scrollOffset]);

  const onScroll = React.useCallback(
    (params: ScrollParams) => {
      scrollTopRef.current = String(params.scrollTop);
    },
    [scrollTopRef]
  );

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) =>
    data ? (
      <GamesListItem
        key={`game-${data[index].id}`}
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

  return data && data.length ? (
    <AutoSizer disableHeight>
      {({ width }) => (
        <List
          className="games-list"
          height={900}
          width={width}
          rowHeight={isSmMedia ? 96 : 144}
          rowCount={data?.length ?? 0}
          rowRenderer={Row}
          scrollTop={scrollOffset}
          onScroll={onScroll}
        />
      )}
    </AutoSizer>
  ) : (
    <Grid container justifyContent={'center'}>
      <Typography>Пусто!</Typography>
    </Grid>
  );
}

export default GamesList;
