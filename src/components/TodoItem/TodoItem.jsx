import { useState } from "react";
import ImageButton from "../../UI/ImageButton/ImageButton";

import {
  editTodoProp,
  deleteTodo,
  toggleTodoDone,
  deleteFilePath,
} from "../../handlers/todos/todos";

import removeBtn from "../../assets/icons/delete.png";
import doneBtn from "../../assets/icons/done.png";

import styles from "../../css/components/TodoItem/TodoItem.module.css";
import TodoItemTitle from "../TodoItemTitle/TodoItemTitle";
import Deadline from "../Deadline/Deadline";
import TodoFileItem from "../TodoFileItem/TodoFileItem";

const TodoItem = ({ data, store }) => {
  const { id, task, date, description, filesStore, done } = data;

  const [openned, setOpenned] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskDate, setTaskDate] = useState(date);

  const editDescription = (e) =>
    editTodoProp(id, "description", e.target.value, store, setTaskDescription);

  return (
    <div className={done ? `${styles.item} ${styles.done}` : styles.item}>
      <div className={styles.lines}>
        <TodoItemTitle
          id={id}
          store={store}
          state={{ taskTitle, setTaskTitle }}
          openned={openned}
          setOpenned={setOpenned}
        />
        {openned && (
          <div className={styles.additional}>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              onBlur={editDescription}
            />
            {filesStore.map((elem) => (
              <TodoFileItem
                key={Math.random()}
                path={elem.path}
                click={() => deleteFilePath(id, store, elem.id)}
              />
            ))}
          </div>
        )}
      </div>
      {date ? (
        <Deadline id={id} state={{ taskDate, setTaskDate }} store={store} />
      ) : null}
      <div className={styles.btns}>
        <ImageButton
          title="Удалить задачу"
          path={removeBtn}
          alt="remove task"
          click={() => deleteTodo(id, store)}
        />
        <ImageButton
          title="Пометить как завершенную/незавершенную"
          path={doneBtn}
          alt="mark as done/undone"
          click={() => toggleTodoDone(id, store)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
