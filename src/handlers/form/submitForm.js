import TodoService from "../../API/TodoService";

import validateForm from "./validate";
import defineDone from "./defineDone";

export default function submitForm(e, data, store) {
  e.preventDefault();
  if (validateForm(data)) {
    defineDone(data);
    let error;
    try {
      TodoService.createTodo(data);
    } catch (err) {
      error = err;
    }
    if (!error) {
      TodoService.getAllTodos(store.setList);
    }
    return true;
  }
  return false;
}
