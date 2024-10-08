import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectSearchResult } from "../features/searchResult/SearchResult";
import ListItem from "./ListItem";
import styles from "./MainContainer.module.scss";
import Next5DaysForecast from "./Next5DaysForecast";

const MainContainer = () => {
  const weatherData = useAppSelector(selectSearchResult).weatherData;

  return (
    <div className={styles.container}>
      <div>
        <h1>{weatherData?.city?.name}</h1>
        <div className={styles.scrollable}>
          {weatherData.list?.map((weather) => (
            <ListItem
              key={weather.dt_txt}
              hour={weather.dt_txt.split(" ")[1]}
              temp={weather.main.temp}
              icon={weather.weather[0].icon}
            />
          ))}
        </div>
      </div>
      <Next5DaysForecast list={weatherData.list} />
    </div>
  );
};

export default MainContainer;
