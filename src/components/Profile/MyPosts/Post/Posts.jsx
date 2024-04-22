import styles from "./Posts.module.css";
import PropTypes from "prop-types";

const Posts = (props) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar__img}
        src="https://upload.wikimedia.org/wikipedia/ru/3/34/AS_ep20_electric_screwdriver.png"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Posts;

Posts.propTypes = {
  message: PropTypes.string,
  likesCount: PropTypes.number,
};
