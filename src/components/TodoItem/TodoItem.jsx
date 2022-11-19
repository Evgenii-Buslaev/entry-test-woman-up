import { useState } from "react";
import ImageButton from "../../UI/ImageButton/ImageButton";

import {
  editTodoTitle,
  deleteTodo,
  toggleTodoDone,
} from "../../handlers/todos/todos";

import removeBtn from "../../assets/icons/delete.png";
import doneBtn from "../../assets/icons/done.png";
import expandBtn from "../../assets/icons/expand.png";
import turnBtn from "../../assets/icons/turn.png";

import styles from "../../css/components/TodoItem/TodoItem.module.css";

const TodoItem = ({ data, store }) => {
  const { id, task, date, done } = data;
  const [title, setTitle] = useState(task);
  const [openned, setOpenned] = useState(false);

  console.log(openned);

  return (
    <div className={done ? `${styles.item} ${styles.done}` : styles.item}>
      <div className={styles.firstLine}>
        <img
          className={styles.openClose}
          title={openned ? "Свернуть" : "Раскрыть"}
          src={openned ? turnBtn : expandBtn}
          alt={openned ? "Turn" : "Expand"}
          onClick={() => setOpenned(!openned)}
        />
        <input
          className={styles.text}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={(e) => editTodoTitle(id, e.target.value, store, setTitle)}
        ></input>
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
