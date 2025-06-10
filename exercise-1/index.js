import http from "http";
import "dotenv/config";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Benvenuto alla home page!");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Pagina About.");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Pagina non trovata.");
  }
});

server.listen(process.env.PORT);
