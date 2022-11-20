import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { ref } from "@firebase/storage";
import { useState } from "react";

import styles from "../../css/components/FilesForm/FilesForm.module.css";

const FilesForm = ({ data }) => {
  const { state, setState } = data;
  const [progress, setProgress] = useState(0);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file, setState);
  };

  const uploadFiles = (file, setFileFunc) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setFileFunc({ name: file.name, link: url })
        );
      }
    );
  };

  return (
    <form className={styles.cont} onSubmit={handlerSubmit}>
      <input type="file" />
      <button type="submit">Загрузить</button>
      <div>{progress} %</div>
    </form>
  );
};

export default FilesForm;
