import "./App.css";

function Button_(props) {
  function newItem() {
    console.log("hello");
  }
  return (
    <div>
      <button onClick={newItem} className="btn_del">
        <img src={props.button_props} alt="" />
      </button>
    </div>
  );
}

export default Button_;
