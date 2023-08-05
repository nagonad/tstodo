interface Todo {
  text: string;
  completed: boolean;
}
const button = document.getElementById("btn")! as HTMLButtonElement;
const todoinput = document.getElementById("todoinput")! as HTMLInputElement;
const todoform = document.getElementById("todoform")! as HTMLFormElement;
const todolist = document.querySelector("ul")!;

const loadTodo = (): Todo[] => {
  const todos = localStorage.getItem("todos");
  if (todos === null) {
    return [];
  }
  return JSON.parse(todos);
};

const addTodo = (todo: Todo): void => {
  const todoLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  todoLi.append(todo.text);
  todoLi.append(checkbox);
  todolist.append(todoLi);
};

const todos: Todo[] = loadTodo();

todos.forEach(addTodo);

todoform.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: todoinput.value,
    completed: false,
  };
  todos.push(newTodo);
  addTodo(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoinput.value = "";
});
