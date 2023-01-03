import "./App.css";
import Button_ from "./button";

function Input_items(props) {
  return (
    <table className="input_table">
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
      <tbody>
        <tr>
          <th>
            <input type="text" />
          </th>
          <th>
            <input type="text" />
          </th>
          <th>
            <input type="text" />
          </th>
          <th>
            <input type="text" />
          </th>
          <th>
            <input type="text" />
          </th>
          <th>
            <Button_ button_props="https://cdn-icons-png.flaticon.com/512/1732/1732309.png" />
            <Button_ button_props="https://cdn-icons-png.flaticon.com/512/70/70757.png" />
            <Button_ button_props="https://w7.pngwing.com/pngs/672/1022/png-transparent-writing-computer-icons-blog-write-miscellaneous-angle-text.png" />
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default Input_items;
