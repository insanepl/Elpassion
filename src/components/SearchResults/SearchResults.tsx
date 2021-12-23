import ResultItem from "./ResultItem";
import styles from "./SearchResults.module.css";

const SearchResults: React.FC = () => {
  const DUMMY_RESULTS = [
    {
      name: "Oskar D.",
      login: "toocozzy",
      avatar: "https://avatars.githubusercontent.com/u/84155678?v=4",
      id: 84155678,
      bio: "Frontend Developer",
      location: "Warsaw, PL",
      followers: 3,
      following: 5,
      starred: 17,
    },

    {
      full_name: "toocozzy/react-ecommerce-app",
      id: 424701093,
      description: "Fashion E-Commerce Store",
      language: "JavaScript",
      updated_at: "2021-12-09",
      watchers: 15,
    },
  ];

  return (
    <section>
      <h1 className={styles.total_results}>2,530 results</h1>
      <ul>
        {DUMMY_RESULTS.map((result) => (
          <ResultItem result={result} key={result.id} />
        ))}
      </ul>
    </section>
  );
};

export default SearchResults;
