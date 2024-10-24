import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
      fetchQuote();
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
      setTasks(updatedTasks);
    }
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
      
      {quote && (
        <div className="quote-box">
          <p className="quote">"{quote}"</p>
        </div>
      )}
      
      <p>Total Tasks: {tasks.length}</p> {/* Display task count */}
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTaskCompletion(index)} 
            />
            <span>{index + 1}. {task.text}</span> {/* Display task number */}
            <button onClick={() => moveTaskUp(index)}></button> {/* Up arrow button */}
            <button onClick={() => moveTaskDown(index)}></button> {/* Down arrow button */}
            <button onClick={() => deleteTask(index)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
