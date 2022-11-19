import remove from "../../assets/icons/cancel.png";

import styles from "../../css/components/TodoFileItem/TodoFileItem.module.css";

const TodoFileItem = ({ path, click }) => {
  return (
    <div className={styles.line}>
      <h6>{path}</h6>
      <img src={remove} alt="remove file" onClick={click} />
    </div>
  );
};

export default TodoFileItem;
