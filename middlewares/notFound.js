const { failure } = require("../utils/responses");

const notFound = (_req, res, _next) => {
  failure(res, {
    status: 404,
    message: "Invalid route",
  });
};

module.exports = notFound;
