import React, { useRef } from "react";
import { useAppDispatch, useAppSelector, useFetchWeather } from "../app/hooks";
import {
  addCurrentSearchText,
  selectSearchInfo,
} from "../features/searchBar/searchBarSlice";
import styles from "./Header.module.scss";
import TemperatureToggle from "./TemperatureToggle";
import { addHourlyWeather } from "../features/searchResult/SearchResult";

const Header = () => {
  const searchText = useRef<HTMLInputElement | null>(null);
  const searchInfo = useAppSelector(selectSearchInfo);
  const dispatch = useAppDispatch();
  const units = searchInfo.temperature === "C" ? "metric" : "imperial ";

  useFetchWeather(searchInfo.searchText, units);

  const handleSearchClick = async () => {
    if (searchText.current) {
      const url =
        process.env.REACT_APP_API_URL +
        `q=${searchText.current.value}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        dispatch(addHourlyWeather(result));
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      dispatch(addCurrentSearchText(searchText.current.value));
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={submitHandler}>
        <input type="text" ref={searchText} />
        <button onClick={handleSearchClick}>Search City</button>
      </form>
      <div>
        <TemperatureToggle />
      </div>
    </header>
  );
};

export default Header;
