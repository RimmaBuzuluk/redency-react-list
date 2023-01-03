import "./App.css";
import Button_ from "./button";

function List_item(props) {
  //     deleteItem=id=>{
  //         this.setState(prevState=>({
  //             elements:prevState.elements.filter(el=>el.id !=id)
  //         }))
  //     }
  return (
    <tr className="new_table">
      <th className="name">{props.post.name}</th>
      <th className="created">{props.post.created}</th>
      <th className="category">{props.post.categor}</th>
      <th className="content">{props.post.contest}</th>
      <th className="data">{props.post.dates}</th>
      <th className="main__img">
        <Button_ button_props="https://cdn-icons-png.flaticon.com/512/1732/1732309.png" />
        <Button_ button_props="https://cdn-icons-png.flaticon.com/512/70/70757.png" />
        <Button_ button_props="https://w7.pngwing.com/pngs/672/1022/png-transparent-writing-computer-icons-blog-write-miscellaneous-angle-text.png" />
      </th>
    </tr>
  );
}

export default List_item;
