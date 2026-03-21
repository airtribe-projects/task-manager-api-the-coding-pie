const success = (res, { status = 200, data = {}, message = "" }) => {
  return res.status(status).send({ success: true, data, message });
};

const failure = (res, { message, status = 500 }) => {
  return res.status(status).send({ success: false, message });
};

module.exports = {
  success,
  failure,
};
