import styles from "../../css/UI/InputDate/InputDate.module.css";

const InputDate = ({ text, data }) => {
  const { state, setState } = data;

  return (
    <div className={styles.cont}>
      <label htmlFor="date">{text}</label>
      <input
        type="date"
        id="date"
        className={styles.date}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default InputDate;
