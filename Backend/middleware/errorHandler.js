const errorHandler = (err, req, res, next) => {
  process.env.NODE_ENV !== "production" && console.error(err.stack);
  res.status(err.statusCode || 500).json({
    status: err.statusCode,
    message: err.message,
  });
};

export default errorHandler;
