import TodoItem from "../TodoItem/TodoItem";

import styles from "../../css/components/TodoList/TodoList.module.css";

const TodoList = ({ store }) => {
  return (
    <ul className={styles.list}>
      {store.list.map((todo) => (
        <TodoItem key={Math.random()} data={todo} store={store} />
      ))}
    </ul>
  );
};

export default TodoList;
