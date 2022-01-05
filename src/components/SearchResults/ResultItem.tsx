import styles from "./ResultItem.module.css";
import StarIcon from "../../assets/icons/results/star-icon.svg";
import Results from "../../models/Results";
import RepoIcon from "../../assets/icons/results/repo-icon.svg";
import { Link } from "react-router-dom";

const ResultItem: React.FC<Results> = ({ result }) => {
  const convertedDate = new Date(result.updated_at);

  const formatedDate = convertedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <li className={styles.result}>
      <div className={styles.flex}>
        <div className={styles.avatar_container}>
          <img
            className={
              result.avatar_url ? styles.result__avatar : styles.result__repo
            }
            src={result.avatar_url || RepoIcon}
            alt="user avatar"
          />
        </div>
        {result.name && <h1 className={styles.result__name}>{result.name}</h1>}
        {result.login && (
          <Link
            to={`/resultslist/user/${result.id}`}
            className={`${styles.result__name} ${styles["result__name--grey"]}`}
          >
            {result.login}
          </Link>
        )}
      </div>
      <div className={styles.margin}>
        {result.description && (
          <h2 className={styles.result__about}>{result.description}</h2>
        )}
        {result.bio && <h2 className={styles.result__about}>{result.bio}</h2>}

        <ul className={styles.result__list}>
          {result.watchers || result.watchers === 0 ? (
            <li className={styles["result__list-item"]}>
              <img
                className={styles["result__list-icon"]}
                src={StarIcon}
                alt="star icon"
              />
              {result.watchers}
            </li>
          ) : (
            ""
          )}
          {result.language && (
            <li className={styles["result__list-item"]}>
              <div
                className={`${styles.result__lang} ${
                  styles[result.language.toLowerCase()]
                }`}
              ></div>
              {result.language}
            </li>
          )}

          {result.updated_at && (
            <li className={styles["result__list-item"]}>
              Updated on {formatedDate}
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
