document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.querySelector("#new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    taskList.appendChild(newTask);

    taskInput.value = "";
  });
});