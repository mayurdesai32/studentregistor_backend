const asyncHandler = (controllerfunctions) => (req, res, next) => {
  Promise.resolve(controllerfunctions(req, res, next)).catch(next);
};

module.exports = asyncHandler;
