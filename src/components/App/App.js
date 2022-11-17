import Form from "../Form/Form";

import styles from "../../css/components/App/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Создайте задачу:</h1>
      <Form />
    </div>
  );
}

export default App;
