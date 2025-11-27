const http =require("http");
const Server = http.createServer((req, res) => {

    if (req.url === "/home") {
        res.write("Hello, this is root");
        res.end();
    }
    else if (req.url === "/about") {
        res.write("Hello, this is about page");
        res.end();
    }
    else {
        res.write("Hello, this is else");
        res.end();
    }
});

Server.listen(3000, () => console.log('Server is running'));    