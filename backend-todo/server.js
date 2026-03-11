const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Belajar Node.js", completed: false },
  { id: 2, task: "Mengerjakan tugas HITLAB", completed: false }
];

// GET todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST todo
app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
  };

  todos.push(newTodo);
  res.json(newTodo);
});

// DELETE todo
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  todos = todos.filter(todo => todo.id !== id);

  res.json({ message: "Todo berhasil dihapus" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});