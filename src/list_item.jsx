import "./App.css";
import BArhiv from "./bArhiv";
import BDelete from "./bDelete";
import BRename from "./bRename";

function List_item(props) {
  return (
    <tr className="new_table">
      <th className="name">{props.post.name}</th>
      <th className="created">{props.post.created}</th>
      <th className="category">{props.post.categor}</th>
      <th className="content">{props.post.contest}</th>
      <th className="data">{props.post.dates}</th>
      <th className="main__img">
        <BArhiv ArhivItem={props.ArhivItem} />
        <BDelete deleteItem={props.deleteItem} numTask={props.numTask} />
        <BRename />
      </th>
    </tr>
  );
}

export default List_item;
