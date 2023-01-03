import React from "react";
import "./App.css";
import Input_items from "./inputItems";

import List from "./list";

function App(props) {
  let newName = React.createRef();
  let newCreated = React.createRef();
  let newCategory = React.createRef();
  let newContent = React.createRef();
  let newData = React.createRef();

  let NewItem = () => {
    let name = newName.current.value;
    alert(name);
    let created = newCreated.current.value;
    alert(created);
    let category = newCategory.current.value;
    alert(category);
    let contest = newContent.current.value;
    alert(contest);
    let data = newData.current.value;
    alert(data);
  };
  return (
    <div className="wrapper">
      <List posts={props.posts} />
      <Input_items
        newNameFun={newName}
        newCreated={newCreated}
        newCategory={newCategory}
        newContent={newContent}
        newData={newData}
      />
      <button onClick={NewItem} className="button_create">
        New
      </button>
    </div>
  );
}

export default App;
