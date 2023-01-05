import { rerenderEntireTree } from "../render";

let state = {
  posts: [
    {
      name: "1",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "2",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "3",
      created: 2065,
      categor: "blue",
      contest: "Wark",
      dates: "05.10.2021",
    },
  ],
  arhive: [
    {
      name: "1H",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "2H",
      created: 2015,
      categor: "pink",
      contest: "Task",
      dates: "18.10.2022",
    },
    {
      name: "3H",
      created: 2065,
      categor: "blue",
      contest: "Task",
      dates: "05.10.2021",
    },
  ],
  NumTable: [
    {
      task: "Task",
      activN: 0,
      arhiveN: 0,
    },
    {
      task: "Random Task",
      activN: 0,
      arhiveN: 0,
    },
  ],
};

export let numTask = () => {
  state.NumTable[0].activN = 0;
  state.NumTable[0].arhiveN = 0;
  for (let i = 0; i < state.posts.length; i++) {
    let contest = state.posts[i].contest;
    if (contest == "Task") {
      state.NumTable[0].activN += 1;
    }
  }
  state.NumTable[1].activN = state.posts.length - state.NumTable[0].activN;

  for (let j = 0; j < state.arhive.length; j++) {
    let contestArh = state.arhive[j].contest;
    if (contestArh == "Task") {
      state.NumTable[0].arhiveN += 1;
    }
  }
  state.NumTable[1].arhiveN = state.arhive.length - state.NumTable[0].arhiveN;
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
  console.log(state.posts);
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

export let deleteArhiv = (e) => {
  const currentButtonBack = e.currentTarget;
  //видылити з тега объект
  const div_elem = currentButtonBack.closest(".new_table_arhiv");

  const string_index = div_elem.rowIndex; //индекс выбраной строки
  state.arhive.splice(string_index - 1, 1);
  currentButtonBack.closest(".new_table_arhiv").remove();
};

export let backItem = (e) => {
  const currentButtonBack = e.currentTarget;
  //видылити з тега объект
  const div_elem = currentButtonBack.closest(".new_table_arhiv");

  const string_index = div_elem.rowIndex; //индекс выбраной строки

  const ItemArhivName =
    document.getElementsByClassName("name_arh")[string_index - 1].innerHTML;

  const ItemArhivCreated =
    document.getElementsByClassName("created_arh")[string_index - 1].innerHTML;

  const ItemArhivCategor =
    document.getElementsByClassName("category_arh")[string_index - 1].innerHTML;

  const ItemArhivContest =
    document.getElementsByClassName("content_arh")[string_index - 1].innerHTML;

  const ItemArhivDates =
    document.getElementsByClassName("data_arh")[string_index - 1].innerHTML;

  let MainTableItemArhiv = {
    name: ItemArhivName,
    created: ItemArhivCreated,
    categor: ItemArhivCategor,
    contest: ItemArhivContest,
    dates: ItemArhivDates,
  };

  state.posts.push(MainTableItemArhiv);
  deleteArhiv(e);
  rerenderEntireTree(state);
};

export default state;
