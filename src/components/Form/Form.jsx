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

  console.log(files);

  return (
    <form className={styles.form}>
      <Input text="Название" />
      <Input text="Задача" />
      <InputDate text="Дедлайн" />
      <Button
        text="Добавить файл"
        click={(e) => createAddingFile(e, files, setFiles)}
      />
      {files.length > 0
        ? files.map((elem) => (
            <InputFile id={elem.id} key={elem.id} click={{ files, setFiles }} />
          ))
        : null}
    </form>
  );
};

export default Form;
