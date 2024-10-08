import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SearchInfoState {
  searchText: string;
  temperature: "C" | "F";
}

const initialState: SearchInfoState = {
  searchText: "Yerevan",
  temperature: "C",
};

export const searchBarSlice = createSlice({
  name: "searchInfo",
  initialState,
  reducers: {
    addCurrentSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    changeTemperature: (state, action: PayloadAction<"C" | "F">) => {
      state.temperature = action.payload;
    },
  },
});

export const { addCurrentSearchText, changeTemperature } =
  searchBarSlice.actions;

export const selectSearchInfo = (state: RootState) => state.searchInfo;

export default searchBarSlice.reducer;
