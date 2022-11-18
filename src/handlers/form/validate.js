export default function validateForm(data) {
  const { task, description, filesAmount, filesStore } = data;

  if (!task || !description) {
    alert("Заполните, пожалуйста, все обязательные поля.");
    return false;
  }

  if (task.length > 30) {
    alert("Название задачи не должно превышать 30 символов");
    return false;
  }

  if (filesAmount.length !== filesStore.length) {
    alert("Пожалуйста, прикрепите файлы ко всем созданным шаблонам");
    return false;
  }

  return true;
}
