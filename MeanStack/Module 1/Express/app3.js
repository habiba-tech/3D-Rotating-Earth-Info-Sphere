import express from 'express';
import logger from "./logger.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(logger); // Use the logger middleware

app.get('/', (req, res) => {
    console.log('GET request received');
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});