import { useState } from "react";
import ImageButton from "../../UI/ImageButton/ImageButton";

import {
  editTodoProp,
  deleteTodo,
  toggleTodoDone,
  toggleOpenned,
} from "../../handlers/todos/todos";

import removeBtn from "../../assets/icons/delete.png";
import doneBtn from "../../assets/icons/done.png";
import expandBtn from "../../assets/icons/expand.png";
import turnBtn from "../../assets/icons/turn.png";

import styles from "../../css/components/TodoItem/TodoItem.module.css";

const TodoItem = ({ data, store }) => {
  const { id, task, date, description, filesStore, done } = data;

  const [openned, setOpenned] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskDate, setTaskDate] = useState(date);
  const [taskFilesStore, setTaksFilesStore] = useState(filesStore);

  return (
    <div className={done ? `${styles.item} ${styles.done}` : styles.item}>
      <div className={styles.lines}>
        <div className={styles.firstLine}>
          <img
            className={styles.openClose}
            title={openned ? "Свернуть" : "Раскрыть"}
            src={openned ? turnBtn : expandBtn}
            alt={openned ? "Turn" : "Expand"}
            onClick={() => toggleOpenned(openned, setOpenned)}
          />
          <input
            className={styles.text}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onBlur={(e) =>
              editTodoProp(id, "task", e.target.value, store, setTaskTitle)
            }
          ></input>
        </div>
        {openned && (
          <div className={styles.additional}>
            <p>{description}</p>
            {filesStore.map((elem) => (
              <h6>{elem.path}</h6>
            ))}
          </div>
        )}
      </div>
      {date ? <div className={styles.deadline}>До {date}</div> : null}
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
