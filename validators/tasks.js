const { z } = require("zod");
const { failure } = require("../utils/responses");

const taskIdValidator = z.object({
  id: z.coerce
    .number({
      error: "id parameter should be a positive number",
    })
    .int({
      error: "id parameter is invalid",
    }) // between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
    .positive({
      error: "id parameter should be a positive number",
    }),
});
// get task validator
const getTaskValidator = (req, res, next) => {
  try {
    req.params = taskIdValidator.parse(req.params);

    next();
  } catch (err) {
    const { issues } = err;

    failure(res, {
      status: 400,
      message: issues[0].message,
    });
  }
};

// create task validator
const createTaskSchema = z.object({
  title: z
    .string({
      error: "title field is required",
    })
    .trim()
    .min(1, "title field cannot be empty"),
  description: z.string({
    error: "description field is required",
  }),
  completed: z.boolean({
    error: "completed field is required and should be a boolean",
  }),
});
const createTaskValidator = (req, res, next) => {
  try {
    req.body = createTaskSchema.parse(req.body);
    next();
  } catch (err) {
    const { issues } = err;

    failure(res, {
      status: 400,
      message: issues[0].message,
    });
  }
};

// update task validator
const updateTaskSchema = z.object({
  title: z
    .string({
      error: "title field is required",
    })
    .trim()
    .min(1, "title field cannot be empty")
    .optional(),
  description: z
    .string({
      error: "description field is required",
    })
    .optional(),
  completed: z
    .boolean({
      error: "completed field is required and should be a boolean",
    })
    .optional(),
});
const updateTaskValidator = (req, res, next) => {
  try {
    req.params = taskIdValidator.parse(req.params);
    req.body = updateTaskSchema.parse(req.body);
    next();
  } catch (err) {
    const { issues } = err;

    failure(res, {
      status: 400,
      message: issues[0].message,
    });
  }
};

// delete task validator
const deleteTaskValidator = (req, res, next) => {
  try {
    req.params = taskIdValidator.parse(req.params);
    next();
  } catch (err) {
    const { issues } = err;

    failure(res, {
      status: 400,
      message: issues[0].message,
    });
  }
};

module.exports = {
  getTaskValidator,
  createTaskValidator,
  updateTaskValidator,
  deleteTaskValidator,
};
