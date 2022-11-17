import { useState } from "react";

import Input from "../../UI/Input/Input";
import InputDate from "../../UI/InputDate/InputDate";
import InputFile from "../../UI/InputFile/InputFile";
import Button from "../../UI/Button/Button";
import ImageButton from "../../UI/ImageButton/ImageButton";

import createAddingFile from "../../handlers/form/createAddingFile";
import validateForm from "../../handlers/form/validate";

import addFile from "../../assets/icons/add-file.png";
import closeForm from "../../assets/icons/close.png";

import styles from "../../css/components/Form/Form.module.css";

const Form = ({ close }) => {
  const [files, setFiles] = useState([]);

  return (
    <>
      <form className={styles.form} onSubmit={() => console.log(1)}>
        <Input text="Название" />
        <Input text="Задача" />
        <InputDate text="Дедлайн" />
        <ImageButton
          click={() => createAddingFile(files, setFiles)}
          title="Добавить файл"
          path={addFile}
          alt="add files"
        />
        {files.length > 0 &&
          files.map((elem) => (
            <InputFile id={elem.id} key={elem.id} click={{ files, setFiles }} />
          ))}
        <Button
          text="Создать"
          type="submit"
          click={(e) => {
            e.preventDefault();
            validateForm();
            console.log("submit!");
            close();
          }}
        />
        <img
          className={styles.close}
          src={closeForm}
          alt="close"
          onClick={close}
        ></img>
      </form>
    </>
  );
};

export default Form;
