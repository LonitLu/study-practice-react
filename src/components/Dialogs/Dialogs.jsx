import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import PropTypes from "prop-types";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements} </div>
      <textarea
        ref={newMessageElement}
        name=""
        id=""
        cols="30"
        rows="1"
      ></textarea>
      <button onClick={addMessage} className={styles.btn}>
        New message
      </button>
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.array,
  messages: PropTypes.array,
  state: PropTypes.object,
};

export default Dialogs;
