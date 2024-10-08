import Header from "./Header";
import MainContainer from "./MainContainer";
import { useAppSelector } from "../app/hooks";
import ErrorContainer from "./ErrorContainer";
import { selectSearchResult } from "../features/searchResult/SearchResult";

const Body = () => {
  const searchResult = useAppSelector(selectSearchResult);

  return (
    <div>
      <Header />
      {searchResult ? <MainContainer /> : <ErrorContainer />}
    </div>
  );
};

export default Body;
