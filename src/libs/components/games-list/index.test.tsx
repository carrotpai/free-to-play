import { GamesFilterData } from '@/libs/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import GamesList from '.';
import { useGamesListQuery } from '@/libs/hooks';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('games list tests', () => {
  it('render empty message for empty query', async () => {
    const args: GamesFilterData = {
      platform: 'pc',
      sortBy: 'relevance',
      tags: ['mmorpg', 'shooter', 'strategy', 'moba'],
    };
    render(<GamesList queryArgs={args} />, { wrapper: createWrapper() });
    const elem = await waitFor(() => screen.findByText('Пусто!'), { timeout: 10000 });
    expect(elem).toBeDefined();
  });

  it('query return loading state', async () => {
    const args: GamesFilterData = {
      platform: 'pc',
      sortBy: 'relevance',
      tags: ['moba'],
    };
    const { result } = renderHook(() => useGamesListQuery(args), { wrapper: createWrapper() });
    await waitFor(() => expect(result.current.isLoading).toBe(true), { timeout: 10000 });
  });

  it('query return data', async () => {
    const args: GamesFilterData = {
      platform: 'pc',
      sortBy: 'relevance',
      tags: ['moba'],
    };
    const { result } = renderHook(() => useGamesListQuery(args), { wrapper: createWrapper() });
    await waitFor(() => expect(result.current.isSuccess).toBe(true), { timeout: 10000 });
    expect(result.current.data).toBeDefined();
  });
});
