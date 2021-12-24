import styles from "./ResultItem.module.css";
import StarIcon from "../../assets/icons/results/star-icon.svg";
import JsIcon from "../../assets/icons/results/Js-icon.svg";
import Results from "../../models/Results";

const ResultItem: React.FC<Results> = ({ result }) => {
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
