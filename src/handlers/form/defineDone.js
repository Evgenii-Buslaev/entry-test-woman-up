export default function defineDone(data) {
  if (data.date) {
    const deadline = Date.parse(data.date);
    if (deadline > Date.now()) {
      data.done = false;
    } else {
      data.done = true;
    }
  }

  return data;
}
