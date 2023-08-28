export const paths = {
  index: '/',
  game: '/game/:id',
} as const;

export type RoutesObject = typeof paths;
