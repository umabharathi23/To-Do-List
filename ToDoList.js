const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Add task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  li.addEventListener("click", () => li.classList.toggle("completed"));
  li.querySelector(".delete-btn").addEventListener("click", () => li.remove());
  todoList.appendChild(li);
  taskInput.value = "";
});

// Press "Enter" to add task
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});
