const todos = [];

while (true) {
  let action = prompt("What would you like to do?");

  if (action === "quit") {
    console.log("OK, YOU QUIT THE APP");
    break;
  } else if (action === "new") {
    let todoToAdd = prompt("Enter new todo");
    todos.push(todoToAdd);
  } else if (action === "list") {
    console.log("*".repeat(12));
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*".repeat(12));
  } else if (action === "delete") {
    let indexOfTodoTORemove = parseInt(prompt("Enter index of todo to delete"));
    while (indexOfTodoTORemove === NaN) {
      indexOfTodoTORemove = parseInt(prompt("Enter index of todo to delete"));
    }
    todos.splice(indexOfTodoTORemove, 1);
    console.log("Todo Removed");
  }
}
