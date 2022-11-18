import styles from "../../css/UI/Input/Input.module.css";

const Input = ({ text, data }) => {
  const { state, setState } = data;

  return (
    <input
      type="text"
      className={styles.input}
      placeholder={`${text} *`}
      value={state}
      onChange={(e) => setState(e.target.value)}
    ></input>
  );
};

export default Input;
