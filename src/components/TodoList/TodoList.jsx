import TodoItem from "../TodoItem/TodoItem";

import styles from "../../css/components/TodoList/TodoList.module.css";

const TodoList = ({ store }) => {
  return (
    <div className={styles.list}>
      {store.list[0].todos.map((todo) => (
        <TodoItem key={Math.random()} data={todo} store={store} />
      ))}
    </div>
  );
};

export default TodoList;
