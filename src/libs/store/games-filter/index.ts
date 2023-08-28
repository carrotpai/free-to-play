import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type GamesFilterData = Partial<{
  search: string;
  platform: string;
  sortBy: string;
  tags: string[];
}>;

const initState: GamesFilterData = {};

const gamesFilterDataSlice = createSlice({
  name: 'gamesFilter',
  initialState: initState,
  reducers: {
    changePlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
  },
});

export const { changePlatform } = gamesFilterDataSlice.actions;

export default gamesFilterDataSlice.reducer;
