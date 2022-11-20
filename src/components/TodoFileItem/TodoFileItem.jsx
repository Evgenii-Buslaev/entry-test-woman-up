import remove from "../../assets/icons/cancel.png";

import styles from "../../css/components/TodoFileItem/TodoFileItem.module.css";

const TodoFileItem = ({ path, click }) => {
  return (
    <div className={styles.line}>
      <a href={path.link}>{path.name}</a>
      <img src={remove} alt="remove file" onClick={click} />
    </div>
  );
};

export default TodoFileItem;
