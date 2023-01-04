import "./App.css";

function BArhiv(props) {
  return (
    <button onClick={props.ArhivItem} className="btn_arh">
      <img
        src={"https://cdn-icons-png.flaticon.com/512/1732/1732309.png"}
        alt=""
      />
    </button>
  );
}

export default BArhiv;
