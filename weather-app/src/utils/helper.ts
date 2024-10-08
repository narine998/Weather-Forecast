import { FilteredForecast, List } from "../types/interfaces";

export const getNextDaysData = (list: List[]) => {
  const dailyData: FilteredForecast[] = [];

  const datesAdded = new Set();

  list?.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    const time = item.dt_txt.split(" ")[1];

    if (time === "12:00:00" && !datesAdded.has(date)) {
      dailyData.push({
        date,
        temperature: item.main.temp,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      });
      datesAdded.add(date);
    }
  });

  return dailyData;
};
