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
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [filesAmount, setFilesAmount] = useState([]);
  const [filesStore, setFilesStore] = useState([]);

  console.log({ task, description, date, filesStore });

  return (
    <>
      <form className={styles.form} onSubmit={() => console.log(1)}>
        <Input text="Название" data={{ state: task, setState: setTask }} />
        <Input
          text="Задача"
          data={{ state: description, setState: setDescription }}
        />
        <InputDate text="Дедлайн" data={{ state: date, setState: setDate }} />
        <ImageButton
          click={() => createAddingFile(filesAmount, setFilesAmount)}
          title="Добавить файл"
          path={addFile}
          alt="add files"
        />
        {filesAmount.length > 0 &&
          filesAmount.map((elem) => (
            <InputFile
              id={elem.id}
              key={elem.id}
              click={{ filesAmount, setFilesAmount }}
              data={{ state: filesStore, setState: setFilesStore }}
            />
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
