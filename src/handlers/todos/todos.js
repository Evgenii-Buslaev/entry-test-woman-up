const editTodoTitle = (id, value, store, setText) => {
  const { list, setList } = store;
  if (!value) {
    alert("Поле не может быть пустым.");
    setText(list.find((elem) => elem.id === id).task);
    return;
  }
  const elem = list.filter((todo) => todo.id === id);
  const otherElems = list.filter((todo) => todo.id !== id);
  elem[0].task = value;
  setList([...otherElems, ...elem].sort((prev, curr) => prev.id - curr.id));
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

export { editTodoTitle, deleteTodo, toggleTodoDone, toggleOpenned };
