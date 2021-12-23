import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/icons/navbar/logo-white.svg";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="#">
          <Logo />
        </a>
      </div>
      <SearchInput className={styles.nav__input} />
    </nav>
  );
};

export default Navbar;
