import { db } from "../firebase.js";
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export default class TodoService {
  static getAllTodos(setFunc) {
    const q = query(collection(db, "todos"));
    onSnapshot(q, (querySnapshot) => {
      let todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() });
      });
      setFunc(todos);
    });
  }

  static async createTodo(elem) {
    await addDoc(collection(db, "todos"), elem);
  }

  static async updateTodo(todo) {
    await updateDoc(doc(db, "todos", todo.id), todo);
  }

  static deleteTodo() {}
}
