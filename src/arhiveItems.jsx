import "./App.css";
// import Button_ from "./button_dalete";

function ArhiveItems(props) {
  //     deleteItem=id=>{
  //         this.setState(prevState=>({
  //             elements:prevState.elements.filter(el=>el.id !=id)
  //         }))
  //     }
  return (
    <tr className="new_table">
      <th className="name">{props.arhive.name}</th>
      <th className="created">{props.arhive.created}</th>
      <th className="category">{props.arhive.categor}</th>
      <th className="content">{props.arhive.contest}</th>
      <th className="data">{props.arhive.dates}</th>
      <th className="main__img">
        {/* <Button_ button_props="https://cdn-icons-png.flaticon.com/512/13/13964.png" /> */}
      </th>
    </tr>
  );
}

export default ArhiveItems;
