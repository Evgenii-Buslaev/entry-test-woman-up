export default function deleteAddingFile(e, state, setFunc) {
  e.preventDefault();
  setFunc(state.filter((elem) => elem.id !== +e.target.id));
}
