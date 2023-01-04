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

export let ArhivItem = (e) => {
  const currentButton = e.currentTarget;
  //видылити з тега объект
  const div_elem = currentButton.closest(".new_table");

  const string_index = div_elem.rowIndex; //индекс выбраной строки

  const ItemArhivName =
    document.getElementsByClassName("name")[string_index - 1].innerHTML;

  const ItemArhivCreated =
    document.getElementsByClassName("created")[string_index - 1].innerHTML;

  const ItemArhivCategor =
    document.getElementsByClassName("category")[string_index - 1].innerHTML;

  const ItemArhivContest =
    document.getElementsByClassName("content")[string_index - 1].innerHTML;

  const ItemArhivDates =
    document.getElementsByClassName("data")[string_index - 1].innerHTML;

  let ArhivTableItem = {
    name: ItemArhivName,
    created: ItemArhivCreated,
    categor: ItemArhivCategor,
    contest: ItemArhivContest,
    dates: ItemArhivDates,
  };

  state.arhive.push(ArhivTableItem);
  rerenderEntireTree(state);
  deleteItem(e);
};

export default state;
