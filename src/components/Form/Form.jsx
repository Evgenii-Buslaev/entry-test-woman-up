import Input from "../../UI/Input/Input";
import InputDate from "../../UI/InputDate/InputDate";

import styles from "../../css/components/Form/Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <Input text="Название" />
      <Input text="Задача" />
      <InputDate text="Дедлайн" />
    </form>
  );
};

export default Form;
