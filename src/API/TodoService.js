import { db } from "../firebase.js";
import { query, collection, onSnapshot } from "firebase/firestore";

export default class TodoService {
  static getAllTodos(setFunc) {
    const q = query(collection(db, "todos"));
    onSnapshot(q, (querySnapshot) => {
      let todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setFunc(todos);
    });
  }
  static createTodo() {}
  static updateTodo() {}
  static deleteTodo() {}
}
