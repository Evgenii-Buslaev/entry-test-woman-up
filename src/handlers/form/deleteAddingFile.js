export default function deleteAddingFile(e, state, setFunc) {
  setFunc(state.filter((elem) => elem.id !== +e.target.id));
}
