import { useState } from "react";

import Input from "../../UI/Input/Input";
import InputDate from "../../UI/InputDate/InputDate";
import InputFile from "../../UI/InputFile/InputFile";
import Button from "../../UI/Button/Button";
import createAddingFile from "../../handlers/form/createAddingFile";

import styles from "../../css/components/Form/Form.module.css";

const Form = () => {
  const [openned, setOpenned] = useState(true);
  const [files, setFiles] = useState([]);

  return (
    <form className={styles.form} onSubmit={() => console.log(1)}>
      <Input text="Название" />
      <Input text="Задача" />
      <InputDate text="Дедлайн" />
      <Button
        text="Добавить файл"
        type="button"
        click={() => createAddingFile(files, setFiles)}
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
          console.log("submit!");
        }}
      />
    </form>
  );
};

export default Form;
