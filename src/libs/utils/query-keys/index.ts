import { GamesFilterData } from '@/libs/store';

export const getGamesQueryKey = (queryArgs?: GamesFilterData): unknown[] => [
  'games',
  { ...queryArgs },
];
