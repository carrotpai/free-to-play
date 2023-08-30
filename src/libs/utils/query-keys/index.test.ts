import { describe, it } from 'vitest';
import { getGamesQueryKey } from '.';
import { GamesFilterData } from '@/libs/store';

describe('keys generate utils', () => {
  const args: GamesFilterData = { platform: 'pc', sortBy: 'relevance', tags: ['mmorpg'] };
  it('generate valid key', () => {
    expect(getGamesQueryKey(args)).toEqual(['games', { ...args }]);
  });
});
