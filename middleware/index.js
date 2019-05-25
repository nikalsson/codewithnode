module.exports = {
    // Handling the errors in async functions
    asyncErrorHandler: (fn) =>
        (req, res, next) => {
            Promise.resolve(fn(req, res, next))
            .catch(next)
        }
}