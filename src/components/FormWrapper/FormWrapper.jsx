import ImageButton from "../../UI/ImageButton/ImageButton";
import createTodo from "../../assets/icons/create.png";

import styles from "../../css/components/FormWrapper/FormWrapper.module.css";

const FormWrapper = ({ open }) => {
  return (
    <div className={styles.cont}>
      <ImageButton
        click={open}
        title="Создать задачу"
        path={createTodo}
        alt="create todo"
      />
    </div>
  );
};

export default FormWrapper;
