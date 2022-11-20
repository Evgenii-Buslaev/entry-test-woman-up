import Input from "../../UI/Input/Input";
import InputDate from "../../UI/InputDate/InputDate";
import Button from "../../UI/Button/Button";

import useForm from "../../hooks/useForm";
import submitForm from "../../handlers/form/submitForm";

import closeForm from "../../assets/icons/close.png";

import styles from "../../css/components/Form/Form.module.css";
import FilesForm from "../FilesForm/FilesForm";

const Form = ({ close, data }) => {
  const formData = useForm();

  const { task, description, date, filesAmount, filesStore } = formData.data;
  const { setTask, setDescription, setDate, setFilesAmount, setFilesStore } =
    formData.set;

  const submit = (e, data, store) => {
    const res = submitForm(e, data, store);
    if (res) {
      close();
    }
  };

  return (
    <div>
      <form className={styles.form}>
        <Input text="Название" data={{ state: task, setState: setTask }} />
        <Input
          text="Задача"
          data={{ state: description, setState: setDescription }}
        />
        <InputDate text="Дедлайн" data={{ state: date, setState: setDate }} />
        <img
          className={styles.close}
          src={closeForm}
          alt="close"
          onClick={close}
        ></img>
      </form>
      <FilesForm
        files={{ filesAmount, setFilesAmount }}
        data={{ state: filesStore, setState: setFilesStore }}
      />
      <Button
        text="Создать"
        type="submit"
        click={(e) => submit(e, formData.data, data)}
      />
    </div>
  );
};

export default Form;
