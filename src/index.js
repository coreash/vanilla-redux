import { createStore } from "redux";

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const txTodo = document.getElementById("todo");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DELETE_TODO";

const AddTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const DeleteTodo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [newTodo, ...state];
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const state = createStore(reducer);

const dispatchAdd = (text) => {
  state.dispatch(AddTodo(text));
}
const disPatchDelete = (e) => {
  const id = parseInt(e.target.parentNode.id);
  state.dispatch(DeleteTodo(id));
};
const paintList = () => {
  const todos = state.getState();
  ul.innerText = "";
  todos.forEach((todo) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", disPatchDelete);
    
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
state.subscribe(paintList);

const onSubmit = (e) => {
  e.preventDefault();
  const text = txTodo.value;
  txTodo.value = "";
  dispatchAdd(text);
};
form.addEventListener("submit", onSubmit);
