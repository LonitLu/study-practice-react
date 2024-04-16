import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

import PropTypes from "prop-types";
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.item + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

DialogItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

export default DialogItem;
