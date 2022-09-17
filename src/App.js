import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos))
  };

  const getLocalTodos= () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Iyc's Todo List</h1>
      </header>
      <Form
        setStatus={setStatus}
        setTodos={setTodos}
        todos={todos}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <TodoList setTodos={setTodos} todos={todos}   filtered = {filtered} />
    </div>
  );
}

export default App;
