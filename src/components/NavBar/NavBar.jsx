import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${styles.active__link}` : ""
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? `${styles.active__link}` : ""
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? `${styles.active__link}` : ""
          }
        >
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${styles.active__link}` : ""
          }
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? `${styles.active__link}` : ""
          }
        >
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${styles.active__link}` : ""
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
