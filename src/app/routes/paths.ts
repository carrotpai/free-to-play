export const paths = {
  index: '/',
  game: {
    index: 'game',
    id: ':id',
  },
} as const;

export type RoutesObject = typeof paths;
