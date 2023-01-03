import "./App.css";
import "./list";
import Button_ from "./button";
import { useState } from "react";
import List_item from "./list_item";

function List(props) {
  return (
    <div className="List">
      <table id="table">
        <thead className="thead">
          <tr className="new_table">
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Contest</th>
            <th>Dates</th>
            <th className="main__img">
              <Button_ button_props="https://cdn-icons-png.flaticon.com/512/1732/1732309.png" />
              <Button_ button_props="https://cdn-icons-png.flaticon.com/512/70/70757.png" />
            </th>
          </tr>
        </thead>
        <tbody id="tbody" className="inform">
          {props.posts.map((post, index) => (
            <List_item post={post} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
