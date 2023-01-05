import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { deleteItem } from "./redux/state";
import { ArhivItem } from "./redux/state";
import { newItem } from "./redux/state";
import { backItem, numTask } from "./redux/state";

// newItem("lflfl");
export let rerenderEntireTree = (state) => {
  numTask();
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        state={state}
        newItem={newItem}
        deleteItem={deleteItem}
        ArhivItem={ArhivItem}
        backItem={backItem}
        numTask={numTask}
      />
    </React.StrictMode>
  );
};
