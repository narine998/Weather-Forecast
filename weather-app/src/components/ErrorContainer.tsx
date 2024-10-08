import { useAppSelector } from "../app/hooks";
import { selectSearchInfo } from "../features/searchBar/searchBarSlice";
import styles from "./Error.module.scss";

const ErrorContainer = () => {
  const searchInfo = useAppSelector(selectSearchInfo);

  return (
    <div className={styles.container}>
      <h2>No Weather Results Found</h2>
      <p>
        Sorry, we couldn't find any weather information for
        <strong>{searchInfo.searchText}</strong>.
      </p>
      <p>Please check the city name and try again.</p>
    </div>
  );
};

export default ErrorContainer;
