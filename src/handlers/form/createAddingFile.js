export default function createAddingFile(e, state, setFunc) {
  e.preventDefault();
  setFunc([...state, { id: Math.random(), file: null }]);
}
