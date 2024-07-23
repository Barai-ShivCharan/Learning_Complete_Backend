const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} :${req.url} New Request is Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Shiva");
        break;
      default:
        res.end("404 Not found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started"));
