import TodoItem from "../TodoItem/TodoItem";

import styles from "../../css/components/TodoList/TodoList.module.css";

const TodoList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((todo) => (
        <TodoItem task={todo.task} id={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
