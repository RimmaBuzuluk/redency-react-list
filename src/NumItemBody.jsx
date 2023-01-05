import "./App.css";

function NumItemBody(props) {
  return (
    <tr className="new_table">
      <th className="name">{props.NumTable.task}</th>
      <th className="created">{props.NumTable.activ}</th>
      <th className="category">{props.NumTable.arh}</th>
    </tr>
  );
}

export default NumItemBody;
