export default function createAddingFile(state, setFunc) {
  setFunc([...state, { id: Math.random(), file: null }]);
}
