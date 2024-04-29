// import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import PropTypes from "prop-types";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
              cols="30"
              rows="1"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick} className={styles.btn}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.array,
  messages: PropTypes.array,
  state: PropTypes.object,
  store: PropTypes.object,
};

export default Dialogs;
