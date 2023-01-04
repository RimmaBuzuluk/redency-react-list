import "./App.css";
import ArhiveItems from "./arhiveItems";
import Button_ from "./button_dalete";

function ArhiveTable(props) {
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
            <img
              src="https://cdn-icons-png.flaticon.com/512/13/13964.png"
              alt=""
            />
          </th>
        </tr>
      </thead>
      <tbody id="tbody" className="inform">
        {props.arhive.map((arhive, index) => (
          <ArhiveItems arhive={arhive} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default ArhiveTable;
