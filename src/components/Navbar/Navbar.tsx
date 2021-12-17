import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/icons/navbar/logo-white.svg";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="#">
          <Logo />
        </a>
      </div>
      <form>
        <input className={styles.nav__input} type="text" placeholder="Search" />
      </form>
    </nav>
  );
};

export default Navbar;
