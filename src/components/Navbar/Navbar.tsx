import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/icons/navbar/logo-white.svg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <SearchInput className={styles.nav__input} />
    </nav>
  );
};

export default Navbar;
