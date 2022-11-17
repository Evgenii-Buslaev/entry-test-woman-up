import styles from "../../css/UI/InputFile/InputFile.module.css";

const InputFile = () => {
  return (
    <div className={styles.cont}>
      <input type="file" id="file" className={styles.file} />
    </div>
  );
};

export default InputFile;
