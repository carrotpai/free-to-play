import { getGamesFn } from '@/libs/api/routes';
import { GamesFilterData } from '@/libs/store';
import { GameListResponseType } from '@/libs/types';
import { getGamesQueryKey } from '@/libs/utils';
import { useQuery } from '@tanstack/react-query';

export function useGamesListQuery(queryArgs?: GamesFilterData) {
  const { data, isLoading, isError, isSuccess } = useQuery<GameListResponseType>({
    queryFn: ({ signal }) => getGamesFn(queryArgs, signal),
    queryKey: getGamesQueryKey(queryArgs),
    staleTime: 1000 * 60 * 3,
  });
  return { data, isLoading, isError, isSuccess };
}
