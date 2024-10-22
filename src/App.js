import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content); // Adjusted to match the Quotable API response structure
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
      fetchQuote();  // Fetch a new quote when a task is added
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {quote && <div className="quote">"{quote}"</div>}  {/* Display the quote */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
