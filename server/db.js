let tasks = [{ id: 1, title: 'Example Task' }];
let nextId = 2;

module.exports = {
  getTasks: () => tasks,
  addTask: (title) => {
    tasks.push({ id: nextId++, title });
  },
  deleteTask: (id) => {
    tasks = tasks.filter(task => task.id != id);
  }
};