import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

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
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  const handlerOnDelete = (item) => {
    setTodos(todos.filter((el) => el.id !== item.id));
  };
  const handlerOnChange = (item) => {
    setTodos(
      todos.map((data) => {
        if (data.id === item.id) {
          return {
            ...data,
            completed: item.completed,
          };
        }
        return data;
      })
    );
  };
  const onSubmit = (item) => {
    setTodos([
      ...todos,
      { text: item.text, completed: false, id: Math.random() * 1000 },
    ]);
  };
  return (
    <div className="App">
      <header>
        <h1>Iyc's Todo List</h1>
      </header>
      <Form
        setStatus={setStatus}
        setTodos={setTodos}
        todos={todos}
        onSubmit={onSubmit}
      />
      <TodoList
        setTodos={setTodos}
        handlerOnDelete={handlerOnDelete}
        todos={todos}
        filtered={filtered}
        handlerOnChange={handlerOnChange}
      />
    </div>
  );
}

export default App;
