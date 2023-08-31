import { GameListResponseType } from '@/libs/types';
import { axiosInstance } from '../axios';

const sleep = (time: number) => new Promise((res, _) => setTimeout(res, time));

type GamesListQueryArgs =
  | {
      platform: string;
      sortBy: string;
      tags: string[];
    }
  | undefined;

const getGamesURL = (args: Partial<GamesListQueryArgs>) => {
  let url = `games`;
  const searchParams = new URLSearchParams();
  if (!args) return url;
  if (args?.tags && args?.tags.length) {
    if (args.tags.length >= 2) {
      url = `filter`;
      searchParams.append('tag', args.tags.join('.'));
    } else {
      searchParams.append('category', args.tags[0]);
    }
  }
  if (args.platform) searchParams.append('platform', args.platform);
  if (args.sortBy) searchParams.append('sort-by', args.sortBy);
  return `${url}?${searchParams.toString()}`;
};

export const getGamesFn = async (args: Partial<GamesListQueryArgs>, signal?: AbortSignal) => {
  /* await sleep(2000); */ //для проверки лоадеров и ошибок
  /* throw new Error("error") */
  const response = await axiosInstance.get<GameListResponseType>(getGamesURL(args), { signal });
  return response.data;
};

export const getGameFn = async (id: string, signal?: AbortSignal) => {
  /* await sleep(5000); */
  const response = await axiosInstance.get(`game?id=${id}`, { signal });
  return response.data;
};
