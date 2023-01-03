import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Button_ from "./button";

import { newItem } from "./redux/state";

// newItem("lflfl");
export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={state} newItem={newItem} />
    </React.StrictMode>
  );
};
