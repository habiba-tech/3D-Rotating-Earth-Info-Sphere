//To create a basic web server using the built-in 'http' module

const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, From Habiba this is my server!')
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at",3000);
});