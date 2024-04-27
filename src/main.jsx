// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import state from "./redux/state.jsx";
import { rerenderEntireThree } from "./render.jsx";
// import state from "./redux/state.js";
// import { addPost } from "./redux/state.jsx";
// import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

// addPost("test test");

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <HashRouter>
//     <React.StrictMode>
//       <App state={state} addPost={addPost} />
//     </React.StrictMode>
//   </HashRouter>
// );

rerenderEntireThree(state);
