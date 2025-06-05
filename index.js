const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('Hallo vanaf Docker & Render 🚀');
});

server.listen(port, () => {
  console.log(`Server draait op poort ${port}`);
});
