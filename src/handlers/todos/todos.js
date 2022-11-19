const editTodoProp = (id, prop, value, store, setFunc) => {
  const { list, setList } = store;

  if (!value) {
    alert("Поле не может быть пустым.");
    const elem = list.find((elem) => elem.id === id);
    switch (prop) {
      case "task":
        setFunc(elem.task);
        break;
      case "description":
        setFunc(elem.description);
        break;
      case "date":
        setFunc(elem.date);
        break;
      case "files":
        setFunc(elem.files);
        break;
    }
    return;
  }

  const elem = list.filter((todo) => todo.id === id)[0];
  const otherElems = list.filter((todo) => todo.id !== id);

  switch (prop) {
    case "task":
      elem.task = value;
      break;
    case "description":
      elem.description = value;
      break;
    case "date":
      elem.date = value;
      break;
    case "files":
      elem.files = value;
      break;
  }

  setList([...otherElems, elem].sort((prev, curr) => prev.id - curr.id));
};

const deleteTodo = (id, store) => {
  const { list, setList } = store;
  setList(
    list
      .filter((elem) => elem.id !== id)
      .sort((prev, curr) => prev.id - curr.id)
  );
};

const toggleTodoDone = (id, store) => {
  const { list, setList } = store;
  const elem = list.filter((todo) => todo.id === id);
  const otherElems = list.filter((todo) => todo.id !== id);
  elem[0].done = !elem[0].done;
  setList([...otherElems, ...elem].sort((prev, curr) => prev.id - curr.id));
};

const toggleOpenned = (state, setState) => {
  setState(!state);
};

export { editTodoProp, deleteTodo, toggleTodoDone, toggleOpenned };
