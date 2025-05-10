import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState();
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  function addTask() {
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask })
    });
    setNewTask('');
  }

  function deleteTask(id) {
    fetch(`http://localhost:3001/tasks/${id}`, { method: 'DELETE' });
  }

  return (
    <div>
      <h1>Buggy ToDo</h1>
      <input onInput={e => setNewTask(e.target.value)} placeholder="New Task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks && tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;