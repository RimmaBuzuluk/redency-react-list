import "./App.css";
// import Button_ from "./button_dalete";

function BDelete(props) {
  return (
    <button onClick={props.deleteItem} className="btn_del">
      <img src={"https://cdn-icons-png.flaticon.com/512/70/70757.png"} alt="" />
    </button>
  );
}

export default BDelete;
