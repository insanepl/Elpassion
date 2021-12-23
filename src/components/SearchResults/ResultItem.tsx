import styles from "./ResultItem.module.css";
import StarIcon from "../../assets/icons/results/star-icon.svg";
import JsIcon from "../../assets/icons/results/Js-icon.svg";

interface Result {
  result: {
    name?: string;
    login?: string;
    avatar?: string;
    id?: number;
    bio?: string;
    location?: string;
    followers?: number;
    following?: number;
    starred?: number;
    full_name?: string;
    description?: string;
    language?: string;
    updated?: string;
    watchers?: number;
  };
}

const ResultItem: React.FC<Result> = ({ result }) => {
  return (
    <li className={styles.result}>
      <div className={styles.avatar_container}>
        <img className={styles.result__avatar} src={result.avatar} alt="" />
      </div>
      <div>
        <h1 className={styles.result__name}>{result.name}</h1>
        <h1
          className={`${styles.result__name} ${styles["result__name--grey"]}`}
        >
          {result.login}
        </h1>
        <h2 className={styles.result__about}>{result.description}</h2>
        <h2 className={styles.result__about}>{result.bio}</h2>

        <ul className={styles.result__list}>
          <li className={styles["result__list-item"]}>
            <img src={StarIcon} alt="star icon" /> {result.watchers}
          </li>
          <li className={styles["result__list-item"]}>
            <img src={JsIcon} alt="language icon" /> {result.language}
          </li>

          <li className={styles["result__list-item"]}>
            Updated on {result.updated}
          </li>
          <li className={styles["result__list-item"]}>{result.location}</li>
        </ul>
      </div>
    </li>
  );
};

export default ResultItem;
