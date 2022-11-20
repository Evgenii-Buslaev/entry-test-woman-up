import TodoService from "../../API/TodoService";

import defineDone from "../form/defineDone";

const editTodoProp = (id, prop, value, store, setFunc) => {
  const { list, setList } = store;

  if (!value) {
    alert("Поле не может быть пустым.");
    const elem = list.find((elem) => elem.id === id);
    switch (prop) {
      case "task":
        setFunc(elem.task);
        break;
      case "description":
        setFunc(elem.description);
        break;
      case "date":
        setFunc(elem.date);
        break;
      case "files":
        setFunc(elem.files);
        break;
    }
    return;
  }

  let elem = list.filter((todo) => todo.id === id)[0];

  switch (prop) {
    case "task":
      elem.task = value;
      break;
    case "description":
      elem.description = value;
      break;
    case "date":
      elem.date = value;
      elem = defineDone(elem);
      break;
    case "files":
      elem.files = value;
      break;
  }

  let error;
  try {
    TodoService.updateTodo(elem);
  } catch (err) {
    console.log(err);
  }

  if (!error) {
    TodoService.getAllTodos(setList);
  }
};

const deleteTodo = (id, store) => {
  const { list, setList } = store;
  let error;
  try {
    TodoService.deleteTodo(id);
  } catch (err) {
    error = err;
    console.log(error);
  }

  if (!error) {
    TodoService.getAllTodos(setList);
  }
};

const deleteFilePath = (id, store) => {
  const { list, setList } = store;

  const task = list.find((elem) => elem.id === id);
  task.filesStore = null;

  let error;
  try {
    TodoService.updateTodo(task);
  } catch (err) {
    console.log(err);
  }

  if (!error) {
    TodoService.getAllTodos(setList);
  }
};

const toggleTodoDone = (id, store) => {
  const { list, setList } = store;
  const elem = list.filter((todo) => todo.id === id);
  elem[0].done = !elem[0].done;

  let error;
  try {
    TodoService.updateTodo(elem[0]);
  } catch (err) {
    console.log(err);
  }

  if (!error) {
    TodoService.getAllTodos(setList);
  }
};

const toggleOpenned = (state, setState) => {
  setState(!state);
};

export {
  editTodoProp,
  deleteTodo,
  toggleTodoDone,
  toggleOpenned,
  deleteFilePath,
};
