import deleteAddingFile from "../../handlers/form/deleteAddingFile";

import cancel from "../../assets/icons/cancel.png";
import styles from "../../css/UI/InputFile/InputFile.module.css";

const InputFile = ({ id, click, data }) => {
  const { state, setState } = data;
  const { filesAmount, setFilesAmount } = click;

  return (
    <div className={styles.cont}>
      <input
        type="file"
        id={id}
        className={styles.file}
        value={state.filter((elem) => elem.id === id).path}
        onChange={(e) => {
          setState([...state, { id: e.target.id, path: e.target.value }]);
        }}
      />
      <img
        id={id}
        src={cancel}
        alt="cancel adding"
        className={styles.cancel}
        onClick={(e) => {
          setState(state.filter((elem) => elem.id !== e.target.id));
          deleteAddingFile(e, filesAmount, setFilesAmount);
        }}
      ></img>
    </div>
  );
};

export default InputFile;
