import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, setTodos,filtered, handlerOnChange,handlerOnDelete}) {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((item) => (
          <Todo  id={item.id} handlerOnDelete={handlerOnDelete} handlerOnChange={handlerOnChange} completed={item.completed} setTodos={setTodos} text={item.text}/>
        ))}
      </ul>
    </div>
  );
}
