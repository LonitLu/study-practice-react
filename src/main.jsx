import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import state from "./redux/state.js";
import { addPost } from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";

addPost("test test");

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  </BrowserRouter>
);
