import React from "react";

export default function Form({ setInputValue, setTodos, todos, inputValue , setStatus}) {
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  const valueSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, {text: inputValue, completed: false, id:Math.random() * 1000},
    ]);
    setInputValue("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input type="text" placeholder="Add Todo" className="todo-input" value={inputValue} onChange={inputValueHandler} />
      <button className="todo-button" type="submit" onClick={valueSubmitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
