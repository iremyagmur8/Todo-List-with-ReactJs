import React from "react";

export default function Todo({ text, item, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== item.id));
  };

  const saveHandler = () => {
    setTodos(
      todos.map((data) => {
        if (data.id === item.id) {
          return {
            ...data,
            completed: !data.completed,
          };
        }
        return data;
      })
    );
  };
  return (
    <div className="todo-items">
      <li className={`todo-item ${item.completed ? "completed" : ''}`}> {text} </li>
      <button className="save_button" onClick={saveHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash_button" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
