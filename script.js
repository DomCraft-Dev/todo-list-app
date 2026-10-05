// گرفتن المان‌ها
const todoInput = document.getElementById("todoinput");
const btnAdd = document.getElementById("add");
const todoList = document.getElementById("todolist");

// State
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";

// حذف
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  render();
}

// toggle
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
  render();
}

// نمایش
function render() {
  todoList.innerHTML = "";
  
  let filteredTodos = todos;
  
  if (filter === "active") {
    filteredTodos = todos.filter(t => !t.done);
  } else if (filter === "completed") {
    filteredTodos = todos.filter(t => t.done);
  }
  
  filteredTodos.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.text;
    
    if (t.done) {
      li.classList.add("done");
    }
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("Deletebtn");
    
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTodo(t.id);
    });
    
    li.addEventListener("click", () => toggleTodo(t.id));
    
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
  
  // شمارش
  const total = todos.length;
  const done = todos.filter(t => t.done).length;
  const remaining = total - done;
  
  document.getElementById("stats").textContent = 
    `${total} tasks • ${done} completed • ${remaining} remaining`;

  //locall Storage:
  localStorage.setItem("todos", JSON.stringify(todos));
}

// اضافه کردن
btnAdd.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;
  
  todos.push({
    id: Date.now(),
    text: text,
    done: false
  });
  
  todoInput.value = "";
  render();
});

// فیلترها
const filterBtns = document.querySelectorAll("#filters button");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    render();
  });
});
// برای صدا زدن حافظه loacl storage
render();