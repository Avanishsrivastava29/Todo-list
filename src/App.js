import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="app-container"> {/* Added a container div */}
        <h1>To-Do App</h1>
        <div className="task-input">
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div
              className="task-item"
              key={index}
              style={{
                background: `linear-gradient(135deg, #ff6b6b, #8c7ae6)`,
              }}
            >
              <span>{task}</span>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
