import validateForm from "./validate";
import defineDone from "./defineDone";

export default function submitForm(e, data, store) {
  e.preventDefault();
  if (validateForm(data)) {
    data.id = Math.random();
    defineDone(data);
    store.setList(
      [...store.list, data].sort((prev, curr) => prev.id - curr.id)
    );
    return true;
  }
  return false;
}
