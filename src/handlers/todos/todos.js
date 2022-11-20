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
  const otherElems = list.filter((todo) => todo.id !== id);

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
    setList([...otherElems, elem].sort((prev, curr) => prev.id - curr.id));
  }
};

const deleteTodo = (id, store) => {
  const { list, setList } = store;
  setList(
    list
      .filter((elem) => elem.id !== id)
      .sort((prev, curr) => prev.id - curr.id)
  );
};

const deleteFilePath = (id, store, fileId) => {
  const { list, setList } = store;

  const task = list.find((elem) => elem.id === id);
  const files = task.filesStore.filter((obj) => obj.id !== fileId);
  task.filesStore = files;

  const otherTasks = list.filter((elem) => elem.id !== id);

  let error;
  try {
    TodoService.updateTodo(task);
  } catch (err) {
    console.log(err);
  }

  if (!error) {
    setList([...otherTasks, task].sort((prev, curr) => prev.id - curr.id));
  }
};

const toggleTodoDone = (id, store) => {
  const { list, setList } = store;
  const elem = list.filter((todo) => todo.id === id);
  const otherElems = list.filter((todo) => todo.id !== id);
  elem[0].done = !elem[0].done;

  let error;
  try {
    TodoService.updateTodo(elem[0]);
  } catch (err) {
    console.log(err);
  }

  if (!error) {
    setList([...otherElems, ...elem].sort((prev, curr) => prev.id - curr.id));
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
