const todos = [];

while (true) {
  let action = prompt("What would you like to do?");

  if (action === "quit") {
    console.log("OK, YOU QUIT THE APP");
  } else if (action === "new") {
    let todoToAdd = prompt("Enter new todo");
    todos.push(todoToAdd);
  } else if (action === "list") {
    console.log("*".repeat(8));
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*".repeat(8));
  } else if (action === "delete") {
    let indexOfTodoTORemove = prompt("Enter index of todo to delete");
    while (!indexOfTodoTORemove) {
      indexOfTodoTORemove = prompt("Enter index of todo to delete");
    }
    todos.splice(indexOfTodoTORemove, 1);
  }
}
