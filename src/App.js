import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const searchTodo = (id) => {
    const searchedTodo = todos.find(todo => todo.id === id);
    if (searchedTodo) {
      alert(`Todo with id ${id}: ${searchedTodo.text}`);
    } else {
      alert(`No todo with id: ${id}`);
    }
  };

  return (
      <div className="wrapper">
        <div className="container">
          <div className="input-wrapper">
        <input
      type="text"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button className="search-button" onClick={() => searchTodo(todo.id)}>Search</button>
        <input
          type="text"
          value={todo.text}
          onChange={e => editTodo(todo.id, e.target.value)}
        />
      </li>
    ))}
  </ul>
        </div>
      </div>


  );
};

export default TodoList;