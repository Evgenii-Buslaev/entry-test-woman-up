import Input from "../../UI/Input/Input";

import styles from "../../css/components/Form/Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <Input text="Название" />
      <Input text="Задача" />
    </form>
  );
};

export default Form;
