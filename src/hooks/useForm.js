import { useState } from "react";

export default function useForm() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [filesAmount, setFilesAmount] = useState([]);
  const [filesStore, setFilesStore] = useState([]);
  const [done, setDone] = useState(false);

  return {
    data: { task, description, date, filesAmount, filesStore, done },
    set: {
      setTask,
      setDescription,
      setDate,
      setFilesAmount,
      setFilesStore,
      setDone,
    },
  };
}
