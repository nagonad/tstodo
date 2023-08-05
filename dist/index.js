"use strict";
const button = document.getElementById("btn");
const todoinput = document.getElementById("todoinput");
const todoform = document.getElementById("todoform");
const todolist = document.querySelector("ul");
const loadTodo = () => {
    const todos = localStorage.getItem("todos");
    if (todos === null) {
        return [];
    }
    return JSON.parse(todos);
};
const addTodo = (todo) => {
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
const todos = loadTodo();
todos.forEach(addTodo);
todoform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: todoinput.value,
        completed: false,
    };
    todos.push(newTodo);
    addTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoinput.value = "";
});
