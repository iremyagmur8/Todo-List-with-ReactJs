import React from "react";

export default function Todo({ text, id, completed, handlerOnChange,handlerOnDelete}) {
  const deleteHandler = () => {
   handlerOnDelete(
    {
      id,
      completed:!completed
    }
   )
  };

  const saveHandler = () => {
    handlerOnChange({
      id,
      completed:!completed
    })
  };
  return (
    <div className="todo-items">
      <li className={`todo-item ${completed ? "completed" : ''}`}> {text} </li>
      <button className="save_button" onClick={saveHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash_button" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
