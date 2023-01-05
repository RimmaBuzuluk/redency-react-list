import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Button_ from "./button_dalete";
import { deleteItem } from "./redux/state";
import { ArhivItem } from "./redux/state";
import { newItem } from "./redux/state";
import { backItem } from "./redux/state";

// newItem("lflfl");
export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        state={state}
        newItem={newItem}
        deleteItem={deleteItem}
        ArhivItem={ArhivItem}
        backItem={backItem}
      />
    </React.StrictMode>
  );
};
