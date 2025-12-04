function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    console.log("middleware logger executed");
    next();
}

export default logger;