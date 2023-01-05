import "./App.css";
import BBack from "./bBack";

function ArhiveItems(props) {
  return (
    <tr className="new_table">
      <th className="name">{props.arhive.name}</th>
      <th className="created">{props.arhive.created}</th>
      <th className="category">{props.arhive.categor}</th>
      <th className="content">{props.arhive.contest}</th>
      <th className="data">{props.arhive.dates}</th>
      <th className="main__img">
        <BBack backItem={props.backItem} />
      </th>
    </tr>
  );
}

export default ArhiveItems;
