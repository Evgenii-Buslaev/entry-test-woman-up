import { editTodoProp, toggleOpenned } from "../../handlers/todos/todos";

import expandBtn from "../../assets/icons/expand.png";
import turnBtn from "../../assets/icons/turn.png";

import styles from "../../css/components/TodoItemTitle/TodoItemTitle.module.css";

const TodoItemTitle = ({ id, store, state, openned, setOpenned }) => {
  const { taskTitle, setTaskTitle } = state;

  return (
    <div className={styles.container}>
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
  );
};

export default TodoItemTitle;
