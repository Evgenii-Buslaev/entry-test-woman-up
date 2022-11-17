import styles from "../../css/UI/Button/Button.module.css";

const Button = ({ text, click }) => {
  return (
    <button className={styles.defaultItem} onClick={click}>
      {text}
    </button>
  );
};

export default Button;
