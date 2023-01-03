import "./App.css";

function Button_(props) {
  return (
    <div>
      <button className="btn_del">
        <img src={props.button_props} alt="" />
      </button>
    </div>
  );
}

export default Button_;
