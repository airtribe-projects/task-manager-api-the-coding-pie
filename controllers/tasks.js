const allTasks = require("../data/tasks.json");
const { success, failure } = require("../utils/responses");

let tasks = allTasks.tasks;

// GET /tasks -> get all tasks
const getTasks = (_req, res, next) => {
  try {
    success(res, { data: tasks });
  } catch (err) {
    next(err);
  }
};

// GET /tasks/:id -> get a specific task
const getTask = (req, res, next) => {
  try {
    const { id } = req.params;

    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return failure(res, {
        status: 404,
        message: "Task not found",
      });
    }

    success(res, { data: task });
  } catch (err) {
    next(err);
  }
};

// POST /tasks -> create a new task
const createTask = (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed,
    };

    tasks.push(newTask);

    success(res, {
      status: 201,
      data: newTask,
      message: "Task created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// PUT /tasks/:id -> update a task
// Note: just doing the work of PATCH
const updateTask = (req, res, next) => {
  try {
    const { id } = req.params;

    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return failure(res, {
        status: 404,
        message: "Task not found",
      });
    }

    const newTask = req.body;

    const updatedTask = {
      id,
      ...task,
    };

    if (Object.hasOwn(newTask, "title")) {
      updatedTask.title = newTask.title;
    }

    if (Object.hasOwn(newTask, "description")) {
      updatedTask.description = newTask.description;
    }

    if (Object.hasOwn(newTask, "completed")) {
      updatedTask.completed = newTask.completed;
    }

    const taskIndex = tasks.findIndex((t) => t.id === id);
    tasks[taskIndex] = updatedTask;

    success(res, {
      data: updatedTask,
      message: "Task updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

const deleteTask = (req, res, next) => {
  try {
    const { id } = req.params;

    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return failure(res, {
        status: 404,
        message: "Task not found",
      });
    }

    // updated tasks
    tasks = tasks.filter((t) => t.id !== task.id);

    success(res, {
      message: "Task deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
