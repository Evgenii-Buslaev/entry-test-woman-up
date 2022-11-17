import styles from "../../css/UI/InputDate/InputDate.module.css";

const InputDate = ({ text }) => {
  return (
    <div className={styles.cont}>
      <label htmlFor="date">{text}</label>
      <input type="date" id="date" className={styles.date} />
    </div>
  );
};

export default InputDate;
