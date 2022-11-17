import { useState } from "react";
import Form from "../Form/Form";
import FormWrapper from "../FormWrapper/FormWrapper";

import styles from "../../css/components/App/App.module.css";

function App() {
  const [openForm, setOpenForm] = useState(false);

  const formAction = (action) => {
    return action ? setOpenForm(true) : setOpenForm(false);
  };

  return (
    <div className={styles.App}>
      {openForm ? (
        <Form close={() => formAction(false)} />
      ) : (
        <FormWrapper open={() => formAction(true)} />
      )}
    </div>
  );
}

export default App;
