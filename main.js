//Selectors
const todoInput = document.querySelector(".todo-input-text");
const todoAddButton = document.querySelector(".todo-add-item");
const todoList = document.querySelector(".todo-list")

//Event Listeners
todoAddButton.addEventListener('click', addTodoItem);

//Functions
function addTodoItem(event){
    event.preventDefault();
    
    //create div
    const todoDIV = document.createElement("div");
    todoDIV.classList.add("todo-item");

    //create checker
    const todoChecker = document.createElement("input");
    todoChecker.type = "checkbox";
    todoDIV.appendChild(todoChecker);

    //create item
    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    {
        //clear text and reset focus
        todoInput.value = ""; 
        todoInput.focus();
    }
    todoDIV.appendChild(todoItem);

    //create delete button
    const todoDelete = document.createElement("button");
    todoDelete.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    todoDelete.classList.add("todo-delete-button");
    todoDelete.addEventListener('click', deleteTodoItem);

    todoDIV.appendChild(todoDelete);

    todoList.appendChild(todoDIV);
}

function deleteTodoItem(event){
    console.log(event.target.parentElement)
    event.target.parentElement.remove();
}