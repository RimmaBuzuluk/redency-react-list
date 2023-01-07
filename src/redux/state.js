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
    if (contest === "Task") {
      state.NumTable[0].activN += 1;
    }
  }
  state.NumTable[1].activN = state.posts.length - state.NumTable[0].activN;

  for (let j = 0; j < state.arhive.length; j++) {
    let contestArh = state.arhive[j].contest;
    if (contestArh === "Task") {
      state.NumTable[0].arhiveN += 1;
    }
  }
  state.NumTable[1].arhiveN = state.arhive.length - state.NumTable[0].arhiveN;

  console.log(state.NumTable[1].activN);
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

// export let deleteItem = (e) => {
//   // const id = e.currentTarget.dataset.myId
//   //   const новый_массив =  массив_без_удаленного_элемента (подсказка, удалять можно через фильтрацию по айди)
//   //   this.setState({ users: новый_массив })

//   const currentButtonDel = e.currentTarget;
//   const div_elem = currentButtonDel.closest(".new_table");
//   const string_index = div_elem.rowIndex;
//   console.log(string_index);
//   // const newArr = [];
//   // // console.log(newArr);
//   // for (let i = 0; i <= state.posts.length - 1; i++) {
//   //   if (i != string_index - 1) {
//   //     newArr.push(state.posts[i]);
//   //     console.log(state.posts[i]);
//   //     console.log("newARR", newArr);
//   //   }
//   // }
//   // console.log("newARR", newArr);
//   // // state.posts = [];
//   // state.posts = newArr;
//   // console.log("posts", state.posts);

//   // rerenderEntireTree();

//   state.posts.splice(string_index - 1, 1);
//   currentButtonDel.closest(".new_table").remove();
//   console.log(state.posts);
//   // rerenderEntireTree();
// };

export let deleteItem = (e) => {
  const currentButtonDel = e.currentTarget;
  const div_elem = currentButtonDel.closest(".new_table");
  const string_index = div_elem.rowIndex;
  console.log(string_index);
  // const NewPosts = state.posts.filter(
  //   (value, index) => index !== string_index - 1
  // );
  // console.log(NewPosts);
  // state.posts = NewPosts;
  // console.log(state.posts);
  state.posts.splice(string_index - 1, 1);
  currentButtonDel.closest(".new_table").remove();
  rerenderEntireTree(state);
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

export let RenemaItem = (e) => {
  const currentButtonChange = e.currentTarget;
  //видылити з тега объект
  const change_elem = currentButtonChange.closest(".new_table");
  // console.log(change_elem);

  const string_index = change_elem.rowIndex; //индекс выбраной строки
  console.log("index", string_index);
  // console.log(state.posts[string_index - 1]);
  let colorStyle = change_elem.style.color;
  if (colorStyle === "black") {
    console.log("black");
    console.log("post index", state.posts[string_index - 1]);
    change_elem.style.color = " ";
    change_elem.style.color = "gray";
    change_elem.setAttribute("contenteditable", true);
    change_elem.style.border = "2px solid black";
    change_elem.style.background = "#F8F8F8";
    // rerenderEntireTree(state);

    state.posts[string_index - 1].name =
      document.getElementsByClassName("name")[string_index - 1].innerHTML;

    console.log("name", state.posts[string_index - 1].name);

    state.posts[string_index - 1].created =
      document.getElementsByClassName("created")[string_index - 1].innerHTML;

    console.log("created", state.posts[string_index - 1].created);

    state.posts[string_index - 1].categor =
      document.getElementsByClassName("category")[string_index - 1].innerHTML;

    console.log("categor", state.posts[string_index - 1].categor);

    state.posts[string_index - 1].contest =
      document.getElementsByClassName("content")[string_index - 1].innerHTML;

    console.log("contest", state.posts[string_index - 1].contest);

    state.posts[string_index - 1].data =
      document.getElementsByClassName("data")[string_index - 1].innerHTML;

    console.log("data", state.posts[string_index - 1].data);
  } else {
    // console.log("gray");
    change_elem.removeAttribute("contenteditable");
    change_elem.style.color = " ";
    change_elem.style.color = "black";
    change_elem.style.border = "none";
    change_elem.style.background = "none";

    // console.log("post", state.posts[string_index - 1]);
  }
  rerenderEntireTree(state);
};

export default state;
