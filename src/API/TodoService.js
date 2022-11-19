/* import { db } from "../firebase.js";
import { query, collection, onSnapshot } from "firebase/firestore"; */

export default class TodoService {
  /*   static getAllTodos() {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      console.log(todos);
    });
    unsubscribe();
  } */
  static createTodo() {}
  static updateTodo() {}
  static deleteTodo() {}
}
