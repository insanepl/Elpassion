import ResultsContext from "./results-context";
import { useState, useEffect } from "react";

const ResultsProvider: React.FC = (props) => {
  const [params, setParams] = useState("elpassion");
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Promise.all([
          fetch(`https://api.github.com/search/users?q=${params}`),
          fetch(`https://api.github.com/search/repositories?q=${params}`),
        ]);
        const data = await Promise.all(res.map((r) => r.json()));
        const dataPrepared = data.map((elem) => elem.items).flat();

        console.log(data.flat());
        setItems(dataPrepared);
      } catch {
        throw Error("Promise failed");
      }
    };
    fetchData();
  }, [params]);

  return (
    <ResultsContext.Provider
      value={{
        items,
        setParams,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
