import ResultItem from "./ResultItem";
import { useContext } from "react";
import styles from "./SearchResults.module.css";
import ResultsContext from "../../context/results-context";

const SearchResults: React.FC = () => {
  const resultsContext = useContext(ResultsContext);

  return (
    <section>
      <h1 className={styles.total_results}>
        {resultsContext.resultsNumber} results
      </h1>
      <ul>
        {resultsContext.items.map((result: any) => (
          <ResultItem result={result} key={result.id} />
        ))}
      </ul>
    </section>
  );
};

export default SearchResults;
