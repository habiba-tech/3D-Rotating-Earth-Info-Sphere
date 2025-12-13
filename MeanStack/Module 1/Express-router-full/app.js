//app.js - main entry (clean and full version)
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// routes - require the actual files in `routes/`
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/products");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

//using routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// error-handling middleware (must have 4 args)
app.use((err, req, res, next) => {
    console.error(err && err.stack || err);
    res.status(err?.status || 500).json({ error: err?.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
