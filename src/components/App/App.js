import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

import TodoService from "../../API/TodoService";
import Form from "../Form/Form";
import FormWrapper from "../FormWrapper/FormWrapper";
import TodoList from "../TodoList/TodoList";

import styles from "../../css/components/App/App.module.css";

function App() {
  const [list, setList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setList(todos);
    });
    return () => unsubscribe();
  }, []);

  console.log(list);

  const formAction = (action) => {
    return action ? setOpenForm(true) : setOpenForm(false);
  };

  return (
    <div
      className={openForm ? `${styles.App} ${styles.formActive}` : styles.App}
    >
      {openForm ? (
        <Form close={() => formAction(false)} data={{ list, setList }} />
      ) : (
        <>
          <FormWrapper open={() => formAction(true)} />
          <TodoList store={{ list, setList }} />
        </>
      )}
    </div>
  );
}

export default App;
