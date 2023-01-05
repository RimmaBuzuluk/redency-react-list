import "./App.css";

import NumItemBody from "./NumItemBody";

function TableNum(props) {
  return (
    <table className="input_table">
      <thead className="thead">
        <tr className="new_table">
          <th>Name Category</th>
          <th>Activ</th>
          <th>Archived</th>
        </tr>
      </thead>
      <tbody id="tbody" className="inform">
        {props.NumTable.map((NumTable, index) => (
          <NumItemBody NumTable={NumTable} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default TableNum;
