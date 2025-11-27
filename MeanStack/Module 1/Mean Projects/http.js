const http=require("http");
const Server=http.createServer((req,res)=>{
  res.write("this is my server");
  res.end();
});

Server.listen(3000, () => console.log('Server is running'));

