const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/tasks', (req, res) => {
  const tasks = db.getTasks();
  res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  db.addTask(title);
  res.status(200).json({ success: true });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.deleteTask(id);
  res.status(200).json({ success: true });
});

app.listen(3001, () => console.log('Buggy server running'));