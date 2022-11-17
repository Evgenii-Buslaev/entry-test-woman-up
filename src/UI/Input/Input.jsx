import styles from "../../css/UI/Input/Input.module.css";

const Input = ({ text }) => {
  return (
    <input type="text" className={styles.input} placeholder={text}></input>
  );
};

export default Input;
