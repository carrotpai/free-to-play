import { getGameFn } from '@/libs/api/routes';
import { GameResponseType } from '@/libs/types';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

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

describe('gametests', () => {
  it('query return loading state', async () => {
    const { result } = renderHook(
      () =>
        useQuery<GameResponseType>({
          queryFn: ({ signal }) => getGameFn('452', signal),
          queryKey: ['game', '452'],
          staleTime: 1000 * 60 * 5,
        }),
      { wrapper: createWrapper() }
    );
    await waitFor(() => expect(result.current.isLoading).toBe(true), { timeout: 5000 });
  });

  /* it('query return data', async () => {
    const { result } = renderHook(
      () =>
        useQuery<GameResponseType>({
          queryFn: ({ signal }) => getGameFn('452', signal),
          queryKey: ['game', '452'],
          staleTime: 1000 * 60 * 5,
        }),
      { wrapper: createWrapper() }
    );
    await waitFor(() => expect(result.current.isSuccess).toBe(true), { timeout: 10000 });
    expect(result.current.data).toBeDefined();
  }); */
});
