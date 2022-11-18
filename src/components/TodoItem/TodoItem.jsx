import ImageButton from "../../UI/ImageButton/ImageButton";

import remove from "../../assets/icons/delete.png";
import done from "../../assets/icons/done.png";

import styles from "../../css/components/TodoItem/TodoItem.module.css";

const TodoItem = ({ task, id }) => {
  return (
    <div className={styles.item} id={id}>
      <input value={task}></input>
      <div className={styles.btns}>
        <ImageButton title="Удалить задачу" path={remove} alt="remove task" />
        <ImageButton
          title="Пометить как завершенную/незавершенную"
          path={done}
          alt="mark as done/undone"
        />
      </div>
    </div>
  );
};

export default TodoItem;
