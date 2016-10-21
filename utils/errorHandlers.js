var errorHandlers = function errorHandlers(res, status, message) {
    res.status(status).json(message);
};

module.exports = errorHandlers;