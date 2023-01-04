import { rerenderEntireTree } from "../render";

let state = {
  posts: [
    {
      name: "name_1",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "name_1",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "Name",
      created: 2065,
      categor: "blue",
      contest: "Wark",
      dates: "05.10.2021",
    },
  ],
  arhive: [
    {
      name: "name_1",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "name_1",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "Name",
      created: 2065,
      categor: "blue",
      contest: "Wark",
      dates: "05.10.2021",
    },
  ],
};

export let newItem = (
  ItemPostName,
  ItemPostCreated,
  ItemPostCategor,
  ItemPostContest,
  ItemPostDates
) => {
  let newTableItem = {
    name: ItemPostName,
    created: ItemPostCreated,
    categor: ItemPostCategor,
    contest: ItemPostContest,
    dates: ItemPostDates,
  };
  state.posts.push(newTableItem);

  rerenderEntireTree(state);
};

export let deleteItem = (e) => {
  const currentButtonDel = e.currentTarget;
  const div_elem = currentButtonDel.closest(".new_table");
  const string_index = div_elem.rowIndex;
  state.posts.splice(string_index - 1, 1);
  currentButtonDel.closest(".new_table").remove();
};

export default state;
