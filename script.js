const todoInput = document.getElementById("todoinput");
let btnAdd = document.getElementById("add");
let todoList =document.getElementById("todolist");

let todos = [];
function DeleteTodo(id){
todos = todos.filter(t=> t.id !== id);
render();
}

function render(){
    todoList.innerHTML = "";
    todos.forEach(t=>{
        const li =document.createElement("li");
        li.textContent =t.text;
        const Deletebtn =document.createElement("btn");
        Deletebtn.textContent ="🗑️";
        Deletebtn.classList.add("Deletebtn");

        Deletebtn.addEventListener("click",() => DeleteTodo(t.id));

        todoList.appendChild(li);
        li.appendChild(Deletebtn);
    });
};
btnAdd.addEventListener("click",function(){
    const text =todoInput.value.trim();
    if (!text) return;
    todos.push({
        id: Date.now(),
        text: text,
        done: false
    });
    todoInput.value = "";
    render();
});

