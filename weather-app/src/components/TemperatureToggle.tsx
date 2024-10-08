import React from "react";
import styles from "./TemperatureToggle.module.scss";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  changeTemperature,
  selectSearchInfo,
} from "../features/searchBar/searchBarSlice";

const TemperatureToggle: React.FC = () => {
  const searchInfo = useAppSelector(selectSearchInfo);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTemperature(e.target.value as "C" | "F"));
  };

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.radio}>
        <input
          type="radio"
          value="C"
          checked={searchInfo.temperature === "C"}
          onChange={handleChange}
        />
        °C
      </label>
      <label className={styles.radio}>
        <input
          type="radio"
          value="F"
          checked={searchInfo.temperature === "F"}
          onChange={handleChange}
        />
        °F
      </label>
    </div>
  );
};

export default TemperatureToggle;
