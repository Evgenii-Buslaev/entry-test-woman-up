import styles from "../../css/UI/Button/Button.module.css";

const Button = ({ type, text, click }) => {
  return (
    <button type={type} className={styles.defaultItem} onClick={click}>
      {text}
    </button>
  );
};

export default Button;
