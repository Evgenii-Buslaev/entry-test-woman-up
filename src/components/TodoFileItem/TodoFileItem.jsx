import remove from "../../assets/icons/cancel.png";

import styles from "../../css/components/TodoFileItem/TodoFileItem.module.css";

const TodoFileItem = ({ path, click }) => {
  return (
    <div className={styles.line}>
      <link href={path.link} text={path.name}></link>
      <img src={remove} alt="remove file" onClick={click} />
    </div>
  );
};

export default TodoFileItem;
