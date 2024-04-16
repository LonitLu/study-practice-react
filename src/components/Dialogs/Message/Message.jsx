import styles from "./../Dialogs.module.css";
import PropTypes from "prop-types";

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
