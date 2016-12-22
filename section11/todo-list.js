console.log("list works!");

var todos = ["Buy New Turtle"];
var input = prompt("What would you like to do?");

while(input !== "quit") {
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
        addTodo();
    } else if(input === "delete") {
        deleteTodo();
    }

    var input = prompt("What would you like to do?");

}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
};

function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
};

function deleteTodo() {
    var index = prompt("Enter the number of the \'to-do\' you want to delete.")
    todos.splice(index, 1);
};
