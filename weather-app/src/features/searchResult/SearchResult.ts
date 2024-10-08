import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Weather } from "../../types/interfaces";

export interface SearchResultState {
  weatherData: Weather;
}

const initialState: SearchResultState = {
  weatherData: {} as Weather,
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,

  reducers: {
    addHourlyWeather: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const { addHourlyWeather } = searchResultSlice.actions;

export const selectSearchResult = (state: RootState) => state.searchResult;

export default searchResultSlice.reducer;
