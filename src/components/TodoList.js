import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, setTodos,filtered}) {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((item) => (
          <Todo key={item.id} todos={todos} setTodos={setTodos} text={item.text}  item={item}/>
        ))}
      </ul>
    </div>
  );
}
