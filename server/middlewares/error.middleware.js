export const errorMiddleware = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message =
    error.message || "Something went wrong | internal server Error";

  res.status(error.statusCode).json({
    success: false,
    errorMessage: error.message,
  });
};
