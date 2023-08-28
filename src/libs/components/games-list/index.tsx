import React from 'react';
import GamesListItem from '../games-list-item';
import { FixedSizeList as List } from 'react-window';
import { useQuery } from '@tanstack/react-query';
import { getGamesFn } from '@/libs/api/routes';
import { GamesFilterData } from '@/libs/store';
import { GameListResponseType } from '@/libs/types';

interface GamesListProps {
  queryArgs?: GamesFilterData;
}

function GamesList({ queryArgs }: GamesListProps) {
  const { data } = useQuery<GameListResponseType>({
    queryFn: ({ signal }) => getGamesFn(queryArgs, signal),
    queryKey: ['games', { ...queryArgs }],
  });

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) =>
    data ? (
      <GamesListItem
        style={style}
        title={data[index].title}
        releaseDate={data[index].release_date}
        publisherTitle={data[index].publisher}
        thumbnail={data[index].thumbnail}
        category={data[index].genre}
      />
    ) : null;

  return (
    <List
      className="games-list"
      height={1000}
      width={698}
      itemSize={96}
      itemCount={data?.length ?? 0}
    >
      {Row}
    </List>
  );
}

export default GamesList;
