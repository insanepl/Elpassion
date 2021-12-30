import { useContext } from "react";
import ResultsContext from "../../context/results-context";

const SearchInput: React.FC<{ className: string }> = (props) => {
  const resultsContext = useContext(ResultsContext);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(resultsContext);
    resultsContext.setParams(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className={props.className}
        type="text"
        placeholder="Search"
        onChange={inputTextHandler}
      />
    </form>
  );
};

export default SearchInput;
