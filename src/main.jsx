import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let posts = [
  { id: 1, message: "Hi. how are you?", likesCount: 12 },
  { id: 2, message: "Hi you, It'styles my first post", likesCount: 8 },
  { id: 3, message: "It'styles my first post", likesCount: 6 },
  { id: 4, message: "Yo Victor, Hi. how are you?", likesCount: 22 },
];

let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Victor" },
  { id: 5, name: "Valera" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi you" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo Victor" },
  { id: 5, message: "Hi Valera" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);
