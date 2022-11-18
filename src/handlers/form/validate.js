export default function validateForm(data) {
  const { task, description, date } = data;

  if (!task || !description) {
    alert("Заполните, пожалуйста, все обязательные поля.");
    return false;
  }

  if (task.length > 30) {
    alert("Название задачи не должно превышать 30 символов");
    return false;
  }

  return data;
}
