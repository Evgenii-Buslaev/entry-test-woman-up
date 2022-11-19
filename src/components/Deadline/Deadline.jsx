import { editTodoProp } from "../../handlers/todos/todos";

import styles from "../../css/components/Deadline/Deadline.module.css";

const Deadline = ({ id, state, store }) => {
  const { taskDate, setTaskDate } = state;

  return (
    <div className={styles.deadline}>
      <label htmlFor="deadline">Дедлайн</label>
      <input
        type="date"
        name="deadline"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
        onBlur={(e) =>
          editTodoProp(id, "date", e.target.value, store, setTaskDate)
        }
      />
    </div>
  );
};

export default Deadline;
