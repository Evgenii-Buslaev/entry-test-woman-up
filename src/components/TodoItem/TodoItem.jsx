import ImageButton from "../../UI/ImageButton/ImageButton";
import { useState } from "react";

import remove from "../../assets/icons/delete.png";
import done from "../../assets/icons/done.png";

import styles from "../../css/components/TodoItem/TodoItem.module.css";

const TodoItem = ({ id, task, deadline }) => {
  const [doneItem, setDoneItem] = useState(false);
  return (
    <div
      className={doneItem ? `${styles.item} ${styles.done}` : styles.item}
      id={id}
    >
      <input className={styles.text} value={task}></input>
      <div className={styles.deadline}>До {deadline}</div>
      <div className={styles.btns}>
        <ImageButton title="Удалить задачу" path={remove} alt="remove task" />
        <ImageButton
          title="Пометить как завершенную/незавершенную"
          path={done}
          alt="mark as done/undone"
          click={() => setDoneItem((prevState) => !prevState)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
