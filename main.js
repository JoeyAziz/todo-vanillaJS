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
    todoChecker.addEventListener('click', markTodoItem);
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

function markTodoItem(event){
    const checkMark = event.target;
    const target = event.target.nextElementSibling;
    if(target.classList.contains("todo-marked"))
    {
        checkMark.classList.remove("todo-checkbox-tick");
        target.classList.remove("todo-marked"); 
    }   
    else {
        checkMark.classList.add("todo-checkbox-tick");
        target.classList.add("todo-marked");
    }
}

function deleteTodoItem(event){
    event.target.parentElement.remove();
}

