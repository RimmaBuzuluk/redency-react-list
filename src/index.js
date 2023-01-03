import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Button_ from "./button";

let posts = [
  {
    name: "name_1",
    created: 2015,
    categor: "pink",
    contest: "Task",
    dates: "18.10.2022",
  },
  {
    name: "name_1",
    created: 2015,
    categor: "pink",
    contest: "Task",
    dates: "18.10.2022",
  },
  {
    name: "Name",
    created: 2065,
    categor: "blue",
    contest: "Wark",
    dates: "05.10.2021",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
