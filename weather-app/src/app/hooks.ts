import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect } from "react";
import { addHourlyWeather } from "../features/searchResult/SearchResult";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchWeather = (city: string, units: string) => {
  const dispatch = useAppDispatch();
  const url =
    process.env.REACT_APP_API_URL +
    `q=${city}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        dispatch(addHourlyWeather(result));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
};
