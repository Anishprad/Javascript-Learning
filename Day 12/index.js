function renderTodos() {​​
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoList = document.getElementById("items");
    todoList.innerHtml = "";
    todos.forEach((todo) => {​​
        const todoItem = document.createElement('li');       
        todoItem.innerHTML = `${​​todo}​​
        <button><i class="las la-trash"></i></button>
        `;
        todoList.appendChild(todoItem)
    }​​)
}​​
function addTodo() {​​
    let todoInput = document.querySelector('inputText')
    let todoText = todoInput.value.trim();
    if (todoText !== '') {​​
        const todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.push(todoText)
localStorage.setItem("todos", JSON.stringify(todos))   
renderTodos();
}​​
}​​
function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos"))
    todos.splice(index, 1)
    renderTodos()
    ​​document.querySelector(".delete-btn").addEventListener("click", function(){
        console.log(Delete Todo);
        deleteTodo()
    })
}​​
