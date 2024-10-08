import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import SearchBarReducer from "../features/searchBar/searchBarSlice";
import SearchResultReducer from "../features/searchResult/SearchResult";

export const store = configureStore({
  reducer: {
    searchInfo: SearchBarReducer,
    searchResult: SearchResultReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
