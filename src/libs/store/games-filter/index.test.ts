import reducer, { clearFilter, changeTags } from '.';

describe('filter store test', () => {
  it('return valid init state', async () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ sortBy: '', tags: [] });
  });

  it('valid tags after adding', async () => {
    const prevState = { sortBy: '', tags: ['moba'] };
    expect(reducer(prevState, changeTags('test'))).toEqual({ sortBy: '', tags: ['moba', 'test'] });
  });

  it('valid reset state', async () => {
    const prevState = { sortBy: 'relevance', tags: ['moba'] };
    expect(reducer(prevState, clearFilter())).toEqual({ platform: '', sortBy: '', tags: [] });
  });
});
