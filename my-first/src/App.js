import React, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() !== '') {
      setTodos([...todos, { text: newItem, completed: false }]);
      setNewItem('');
    }
  }

  function handleCheckboxChange(index) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return updatedTodos;
    });
  }

  function handleDelete(index) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              {todo.text}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;