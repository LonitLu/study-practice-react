import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import PropTypes from "prop-types";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.string,
  messages: PropTypes.string,
};

export default Dialogs;
