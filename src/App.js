import React, { useState } from 'react'; 
import './App.css';
import TodoTable from './components/TodoTable';

function TodoList() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };
  
  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  };

  return (
    <div>
      <header className="App-header">
        <h1>Simple Todolist</h1>
      </header>
      <div class="form">
        <span>Add todo:</span>
        <div class="input">
          <label>Description:</label>
          <input type="text" onChange={inputChanged} name="description" value={todo.description}/>
          <label>Date:</label>
          <input type="text" onChange={inputChanged} name="date" value={todo.date}/>
          <button onClick={addTodo}>Add</button>
        </div>
      </div>
      <TodoTable todos={todos} />
    </div>
  );
};
  
export default TodoList;
