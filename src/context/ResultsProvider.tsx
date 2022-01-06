import ResultsContext from "./results-context";
import { useState, useEffect } from "react";

const ResultsProvider: React.FC = (props) => {
  const [params, setParams] = useState("elpassion");
  const [items, setItems] = useState<{}>([]);
  const [resultsNumber, setResultsNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await Promise.all([
          fetch(`https://api.github.com/search/users?q=${params}`, {
            headers: {
              Authorization: "token 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",
            },
            signal: abortController.signal,
          }),
          fetch(`https://api.github.com/search/repositories?q=${params}`, {
            headers: {
              Authorization: "token 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",
            },
            signal: abortController.signal,
          }),
        ]);
        const data = await Promise.all(res.map((r) => r.json()));
        const numberOfResults = new Intl.NumberFormat("en-US").format(
          data[0].total_count + data[1].total_count
        );

        setResultsNumber(numberOfResults);
        const dataPrepared = data
          .map((elem) => elem.items)
          .flat()
          .sort((a: any, b: any) => (a.id > b.id ? 1 : -1));

        setItems(dataPrepared);

        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [params]);

  return (
    <ResultsContext.Provider
      value={{
        items,
        setParams,
        resultsNumber,
        isLoading,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
