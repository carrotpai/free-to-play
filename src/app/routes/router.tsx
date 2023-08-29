import { GamePage, GamePageLayout, MainPage, RootLayout } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';

export const router = createBrowserRouter([
  {
    path: paths.index,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: paths.game.index,
        element: <GamePageLayout />,
        children: [
          {
            path: paths.game.id,
            element: <GamePage />,
          },
        ],
      },
    ],
  },
]);
