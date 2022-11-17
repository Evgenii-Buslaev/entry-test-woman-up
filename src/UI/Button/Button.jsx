import styles from "../../css/UI/Button/Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.defaultItem}>{text}</button>;
};

export default Button;
