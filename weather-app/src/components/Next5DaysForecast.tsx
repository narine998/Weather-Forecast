import { List } from "../types/interfaces";
import { getNextDaysData } from "../utils/helper";
import styles from "./NextDaysWeather.module.scss";

type PropsType = {
  list: List[];
};

const Next5DaysForecast = ({ list }: PropsType) => {
  const dailyForecast = getNextDaysData(list);

  return (
    <div className={styles.container}>
      {list?.length > 0 ? (
        <ul>
          {dailyForecast.map((forecast: any, index: any) => (
            <li key={index}>
              {forecast.date}:{forecast.temperature}°C,
              {forecast.description}
              <img
                src={`http://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
                alt="icon"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Next5DaysForecast;
