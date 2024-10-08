import { useAppSelector } from "../app/hooks";
import { selectSearchInfo } from "../features/searchBar/searchBarSlice";
import styles from "./ListItem.module.scss";

type ListPropsType = {
  hour: string;
  temp: number;
  icon: string;
};

const ListItem = ({ hour, temp, icon }: ListPropsType) => {
  const selectedTemp = useAppSelector(selectSearchInfo);
  const temperature = Math.round(temp);
  return (
    <div className={styles.hourDiv}>
      {hour}
      <span>
        {temperature}°{selectedTemp.temperature}
      </span>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
    </div>
  );
};

export default ListItem;
