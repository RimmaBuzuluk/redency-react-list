import "./App.css";
import Input_items from "./inputItems";

import List from "./list";

function App(props) {
  // function NewItem() {
  //   console.log(props.posts);
  //   props.posts;
  // }
  return (
    <div className="App">
      <List posts={props.posts} />
      <Input_items />
      <button className="button_create">New</button>
    </div>
  );
}

export default App;
