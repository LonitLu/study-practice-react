import state, { subscribe } from "./redux/state.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { addPost, updateNewPostText } from "./redux/state.jsx";
import { HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireThree = (state) => {
  root.render(
    <HashRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </HashRouter>
  );
};

rerenderEntireThree(state);

subscribe(rerenderEntireThree);
