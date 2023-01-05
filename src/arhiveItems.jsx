import "./App.css";
import BBack from "./bBack";

function ArhiveItems(props) {
  return (
    <tr className="new_table_arhiv">
      <th className="name_arh">{props.arhive.name}</th>
      <th className="created_arh">{props.arhive.created}</th>
      <th className="category_arh">{props.arhive.categor}</th>
      <th className="content_arh">{props.arhive.contest}</th>
      <th className="data_arh">{props.arhive.dates}</th>
      <th className="main__img">
        <BBack backItem={props.backItem} />
      </th>
    </tr>
  );
}

export default ArhiveItems;
