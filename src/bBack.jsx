import "./App.css";

function BBack(props) {
  return (
    <button onClick={props.backItem} className="back_img">
      <img src={"https://cdn-icons-png.flaticon.com/512/13/13964.png"} alt="" />
    </button>
  );
}

export default BBack;
