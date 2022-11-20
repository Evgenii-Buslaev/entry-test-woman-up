import { useState, useEffect } from "react";

import TodoService from "../../API/TodoService";
import Form from "../Form/Form";
import FormWrapper from "../FormWrapper/FormWrapper";
import TodoList from "../TodoList/TodoList";

import styles from "../../css/components/App/App.module.css";

function App() {
  const [list, setList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    TodoService.getAllTodos(setList);
  }, []);

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
