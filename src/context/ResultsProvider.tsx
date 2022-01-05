import ResultsContext from "./results-context";
import { useState, useEffect } from "react";

const ResultsProvider: React.FC = (props) => {
  const [params, setParams] = useState("elpassion");
  const [items, setItems] = useState<any>([]);
  const [resultsNumber, setResultsNumber] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const res = await Promise.all([
          fetch(`https://api.github.com/search/users?q=${params}`),
          fetch(`https://api.github.com/search/repositories?q=${params}`, {
            signal: abortController.signal,
          }),
        ]);
        const data = await Promise.all(res.map((r) => r.json()));
        const dataPrepared = data
          .map((elem) => elem.items)
          .flat()
          .sort((a: any, b: any) => (a.id > b.id ? 1 : -1));

        setResultsNumber(dataPrepared.length);
        setItems(dataPrepared);
      } catch {
        throw Error("Promise failed");
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
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
