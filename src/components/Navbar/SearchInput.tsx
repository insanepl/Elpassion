import { useEffect, useState } from "react";

interface Input {
  className: string;
}

const SearchInput: React.FC<Input> = (props) => {
  const [inputValue, setInputValue] = useState("elpassion");

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Promise.all([
          fetch(`https://api.github.com/search/users?q=${inputValue}`),
          fetch(`https://api.github.com/search/repositories?q=${inputValue}`),
        ]);
        const data = await Promise.all(res.map((r) => r.json()));
        console.log(data.flat());
      } catch {
        throw Error("Promise failed");
      }
    };
    fetchData();
  }, [inputValue]);

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
