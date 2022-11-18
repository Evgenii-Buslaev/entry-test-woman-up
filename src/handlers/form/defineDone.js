export default function defineDone(data) {
  if (data.date) {
    const deadline = Date.parse(date);
    if (deadline > date) {
      data.done = false;
    } else {
      data.done = true;
    }
  }

  return data;
}
