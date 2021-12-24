import ResultsContext from "./results-context";

const ResultsProvider: React.FC = (props) => {
  const resultsContext = {
    name: "",
    login: "",
    avatar: "",
    id: 0,
    bio: "",
    location: "",
    followers: 0,
    following: 0,
    starred: 0,
    full_name: "",
    description: "",
    language: "",
    updated: "",
    watchers: 0,
  };

  return (
    <ResultsContext.Provider value={resultsContext}>
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
