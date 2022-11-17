/* import { useState } from "react"; */

import Input from "../../UI/Input/Input";
import InputDate from "../../UI/InputDate/InputDate";
import InputFile from "../../UI/InputFile/InputFile";
import Button from "../../UI/Button/Button";

import styles from "../../css/components/Form/Form.module.css";

const Form = () => {
  /* const [openned, setOpenned] = useState(true);
  const [files, setFiles] = useState([]); */
  return (
    <form className={styles.form}>
      <Input text="Название" />
      <Input text="Задача" />
      <InputDate text="Дедлайн" />
      <Button text="Добавить файл" />
    </form>
  );
};

export default Form;
