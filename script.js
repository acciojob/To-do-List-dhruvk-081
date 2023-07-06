//your code here
let input = document.querySelector("#newTodoInput");
let list = document.querySelector("#todoList");
let addTodoBtn = document.querySelector("#addTodoBtn");

addTodoBtn.addEventListener("click", addTodo);
function addTodo(){
    if(input.value !== ''){
        const li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
        input.value = "";
    }   
}