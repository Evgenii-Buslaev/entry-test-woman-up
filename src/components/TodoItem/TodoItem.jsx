import { useState } from "react";
import ImageButton from "../../UI/ImageButton/ImageButton";

import removeBtn from "../../assets/icons/delete.png";
import doneBtn from "../../assets/icons/done.png";

import styles from "../../css/components/TodoItem/TodoItem.module.css";

const TodoItem = ({ data, store }) => {
  const { id, task, date, done } = data;
  const { list, setList } = store;
  const [title, setTitle] = useState(task);

  const editText = (id, value) => {
    const elem = list.filter((todo) => todo.id === id);
    const otherElems = list.filter((todo) => todo.id !== id);
    elem[0].task = value;
    setList([...otherElems, ...elem].sort((prev, curr) => prev.id - curr.id));
  };

  const toggleDone = (id) => {
    const elem = list.filter((todo) => todo.id === id);
    const otherElems = list.filter((todo) => todo.id !== id);
    elem[0].done = !elem[0].done;
    setList([...otherElems, ...elem].sort((prev, curr) => prev.id - curr.id));
  };

  return (
    <div
      className={done ? `${styles.item} ${styles.done}` : styles.item}
      id={id}
    >
      <input
        className={styles.text}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={(e) => editText(id, e.target.value)}
      ></input>
      {date ? <div className={styles.deadline}>До {date}</div> : null}
      <div className={styles.btns}>
        <ImageButton
          title="Удалить задачу"
          path={removeBtn}
          alt="remove task"
        />
        <ImageButton
          title="Пометить как завершенную/незавершенную"
          path={doneBtn}
          alt="mark as done/undone"
          click={() => toggleDone(id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
