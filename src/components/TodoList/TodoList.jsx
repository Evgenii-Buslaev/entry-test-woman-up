import TodoItem from "../TodoItem/TodoItem";

import styles from "../../css/components/TodoList/TodoList.module.css";

const TodoList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((todo) => (
        <TodoItem
          key={Math.random()}
          task={todo.task}
          id={todo.id}
          deadline={todo.date}
        />
      ))}
    </ul>
  );
};

export default TodoList;
