import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ResultsContext from "../context/results-context";
import styles from "./UserPage.module.css";
import StarIcon from "../assets/icons/results/star-icon.svg";
import HeroIcon from "../assets/icons/results/hero-icon.svg";

const UserPage: React.FC = () => {
  let match = useParams();
  const resultsContext = useContext(ResultsContext);

  const user = resultsContext.items.find((elem: any) => {
    return elem.id == match.userID;
  });

  return (
    <>
      <Navbar />
      <div className={styles.user}>
        <div className={styles["user__avatar-wrapper"]}>
          <img
            src={user.avatar_url}
            className={styles["user__avatar"]}
            alt="user avatar"
          />
        </div>
        <p className={styles.user__login}>{user.login}</p>
        <ul className={styles["user__detail-list"]}>
          <li className={styles["user__detail-item"]}>
            <img
              className={styles["user__detail-icon"]}
              src={HeroIcon}
              alt="hero icon"
            />
            {user.followers_url.length} Followers
          </li>
          <li className={styles["user__detail-item"]}>
            {user.following_url.length} Following
          </li>
          <li className={styles["user__detail-item"]}>
            <img
              className={styles["user__detail-icon"]}
              src={StarIcon}
              alt="star icon"
            />
            {user.subscriptions_url.length}
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserPage;
