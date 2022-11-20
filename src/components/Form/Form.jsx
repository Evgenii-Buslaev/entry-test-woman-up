import Input from "../../UI/Input/Input";
import InputDate from "../../UI/InputDate/InputDate";
import InputFile from "../../UI/InputFile/InputFile";
import Button from "../../UI/Button/Button";
import ImageButton from "../../UI/ImageButton/ImageButton";

import useForm from "../../hooks/useForm";
import createAddingFile from "../../handlers/form/createAddingFile";
import submitForm from "../../handlers/form/submitForm";

import addFile from "../../assets/icons/add-file.png";
import closeForm from "../../assets/icons/close.png";

import styles from "../../css/components/Form/Form.module.css";

const Form = ({ close, data }) => {
  const formData = useForm();
  const { list, setList } = data;

  const { task, description, date, filesAmount, filesStore } = formData.data;
  const { setTask, setDescription, setDate, setFilesAmount, setFilesStore } =
    formData.set;

  const submit = (e, data, store) => {
    const res = submitForm(e, data, store);
    if (res) {
      close();
    } else {
      alert("Сервер перегружен. Пожалуйста, попробуйте позже.");
      return;
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => submit(e, formData.data, data)}
    >
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
        click={(e) => submit(e, formData.data, data)}
      />
      <img
        className={styles.close}
        src={closeForm}
        alt="close"
        onClick={close}
      ></img>
    </form>
  );
};

export default Form;
