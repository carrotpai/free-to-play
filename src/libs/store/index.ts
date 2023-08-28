import { configureStore } from '@reduxjs/toolkit';
import gamesFilterReducer, {
  type GamesFilterData as GamesFilterStoreDataType,
} from './games-filter';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    gamesFilter: gamesFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GamesFilterData = GamesFilterStoreDataType;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
