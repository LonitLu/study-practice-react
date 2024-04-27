import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { addPost } from "./redux/state.jsx";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

export let rerenderEntireThree = (state) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>
    </HashRouter>
  );
};
