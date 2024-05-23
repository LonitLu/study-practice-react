import store from "./redux/redux-store.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireThree = () => {
  root.render(
    <HashRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </HashRouter>
  );
};

rerenderEntireThree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
});
