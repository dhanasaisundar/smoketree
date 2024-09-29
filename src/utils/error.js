function errorMiddleware(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    status,
    message,
  });
}

module.exports = errorMiddleware;
