import deleteAddingFile from "../../handlers/form/deleteAddingFile";

import cancel from "../../assets/icons/cancel.png";
import styles from "../../css/UI/InputFile/InputFile.module.css";

const InputFile = ({ id, click }) => {
  const { files, setFiles } = click;
  return (
    <div className={styles.cont}>
      <input type="file" id="file" className={styles.file} />
      <img
        id={id}
        src={cancel}
        alt="cancel adding"
        className={styles.cancel}
        onClick={(e) => deleteAddingFile(e, files, setFiles)}
      ></img>
    </div>
  );
};

export default InputFile;
