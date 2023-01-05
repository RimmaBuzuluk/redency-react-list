import React from "react";
import "./App.css";
import ArhiveTable from "./arhivTable";
import Input_items from "./inputItems";

import List from "./list";
import TableNum from "./tableNum";

function App(props) {
  let newName = React.createRef();
  let newCreated = React.createRef();
  let newCategory = React.createRef();
  let newContent = React.createRef();
  let newData = React.createRef();

  let NewItemText = () => {
    let name = newName.current.value;

    let created = newCreated.current.value;
    // props.newItem(created);
    let category = newCategory.current.value;
    // props.newItem(category);
    let contest = newContent.current.value;
    // props.newItem(contest);
    let data = newData.current.value;
    // props.newItem(data);
    props.newItem(name, created, category, contest, data);
  };

  return (
    <div className="wrapper">
      <List
        posts={props.state.posts}
        deleteItem={props.deleteItem}
        ArhivItem={props.ArhivItem}
        numTask={props.numTask}
      />
      <Input_items
        newNameFun={newName}
        newCreated={newCreated}
        newCategory={newCategory}
        newContent={newContent}
        newData={newData}
      />
      <button onClick={NewItemText} className="button_create">
        New
      </button>
      <ArhiveTable arhive={props.state.arhive} backItem={props.backItem} />
      <TableNum NumTable={props.state.NumTable} />
    </div>
  );
}

export default App;
