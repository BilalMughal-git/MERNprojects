const globalErrorHandler = (err, req, res, next) => {
    res.status(404).send({
      message :'Page Not Found'
    });
  };

  const notFound = (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`);
    err.statusCode = 404;
    next(err);
  };
  
  module.exports = { globalErrorHandler, notFound };