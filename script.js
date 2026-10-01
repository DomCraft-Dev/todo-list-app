const todoInput = document.getElementById("todoinput");
let btnAdd = document.getElementById("add");
let todoList =document.getElementById("todolist");

let todos = [];
function DeleteTodo(id){
todos = todos.filter(t=> t.id !== id);
render();
}
function toggleTodo(id){
const todo =todos.find(t=>t.id === id);
if(todo){
    todo.done = !todo.done;
}
render();
};
function render(){
    todoList.innerHTML = "";
    todos.forEach(t=>{
        const li =document.createElement("li");
        li.textContent =t.text;
        const Deletebtn =document.createElement("button");
        Deletebtn.textContent ="🗑️";
        Deletebtn.classList.add("Deletebtn");

        Deletebtn.addEventListener("click",(e) =>{
            e.stopPropagation();
            DeleteTodo(t.id);
        });

        li.addEventListener("click",() =>toggleTodo(t.id));
        if(t.done){
            li.classList.add("done");
        }

        li.appendChild(Deletebtn);
        todoList.appendChild(li);
        
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

