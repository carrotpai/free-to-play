import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type GamesFilterData = Partial<{
  search: string;
  platform: string;
  sortBy: string;
  tags: string[];
}>;

const initState: GamesFilterData = {
  sortBy: '',
  tags: [],
};

const gamesFilterDataSlice = createSlice({
  name: 'gamesFilter',
  initialState: initState,
  reducers: {
    changePlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    changeTags: (state, action: PayloadAction<string>) => {
      if (state.tags?.includes(action.payload)) {
        console.log('delete tag');
        state.tags = state.tags.filter((tag) => tag !== action.payload);
      } else state.tags?.push(action.payload);
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    clearFilter: (state) => {
      (state.platform = ''), (state.sortBy = ''), (state.tags = []);
    },
  },
});

export const { changePlatform, changeTags, changeSortType, clearFilter } =
  gamesFilterDataSlice.actions;

export default gamesFilterDataSlice.reducer;
