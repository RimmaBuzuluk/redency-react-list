import "./App.css";

function BRename(props) {
  return (
    <button onClick={props.RenemaItem} className="btn_red">
      <img
        src={
          "https://w7.pngwing.com/pngs/672/1022/png-transparent-writing-computer-icons-blog-write-miscellaneous-angle-text.png"
        }
        alt=""
      />
    </button>
  );
}

export default BRename;
