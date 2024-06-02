import styles from "./preloader.module.css";
import preloader from "../../../assets/images/loader.svg";

let Preloader = () => {
  return <img className={styles.preloader} src={preloader} />;
};

export default Preloader;
