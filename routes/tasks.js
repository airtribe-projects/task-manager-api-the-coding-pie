const express = require("express");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const {
  getTaskValidator,
  createTaskValidator,
  updateTaskValidator,
  deleteTaskValidator,
} = require("../validators/tasks");

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskValidator, getTask);
router.post("/", createTaskValidator, createTask);
router.put("/:id", updateTaskValidator, updateTask);
router.delete("/:id", deleteTaskValidator, deleteTask);

module.exports = router;
