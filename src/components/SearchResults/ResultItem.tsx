import styles from "./ResultItem.module.css";
import StarIcon from "../../assets/icons/results/star-icon.svg";
import JsIcon from "../../assets/icons/results/Js-icon.svg";
import Results from "../../models/Results";

const ResultItem: React.FC<Results> = ({ result }) => {
  return (
    <li className={styles.result}>
      <div className={styles.avatar_container}>
        <img className={styles.result__avatar} src={result.avatar_url} alt="" />
      </div>
      <div>
        {result.name && <h1 className={styles.result__name}>{result.name}</h1>}
        {result.login && (
          <h1
            className={`${styles.result__name} ${styles["result__name--grey"]}`}
          >
            {result.login}
          </h1>
        )}
        {result.description && (
          <h2 className={styles.result__about}>{result.description}</h2>
        )}
        {result.bio && <h2 className={styles.result__about}>{result.bio}</h2>}

        <ul className={styles.result__list}>
          {result.watchers && (
            <li className={styles["result__list-item"]}>
              <img src={StarIcon} alt="star icon" /> {result.watchers}
            </li>
          )}
          {result.language && (
            <li className={styles["result__list-item"]}>
              <img src={JsIcon} alt="language icon" /> {result.language}
            </li>
          )}

          {result.updated_at && (
            <li className={styles["result__list-item"]}>
              Updated on {result.updated_at}
            </li>
          )}
          {result.location && (
            <li className={styles["result__list-item"]}>{result.location}</li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default ResultItem;
