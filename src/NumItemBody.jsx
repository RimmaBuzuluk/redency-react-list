import "./App.css";

function NumItemBody(props) {
  return (
    <tr className="new_table">
      <th className="name">{props.NumTable.task}</th>
      <th className="created">{props.NumTable.activN}</th>
      <th className="category">{props.NumTable.arhiveN}</th>
    </tr>
  );
}

export default NumItemBody;
