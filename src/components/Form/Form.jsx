import Input from "../../UI/Input/Input";
import InputDate from "../../UI/InputDate/InputDate";
import InputFile from "../../UI/InputFile/InputFile";

import styles from "../../css/components/Form/Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <Input text="Название" />
      <Input text="Задача" />
      <InputDate text="Дедлайн" />
      <InputFile />
    </form>
  );
};

export default Form;
