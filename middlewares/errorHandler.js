const { failure } = require("../utils/responses");

const errorHandler = (err, _req, res, _next) => {
  failure(res, {
    message: err.message || "Something went wrong",
  });
};

module.exports = errorHandler;
