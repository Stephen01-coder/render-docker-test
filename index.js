const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hallo vanaf Docker & Render 🚀');
});

server.listen(3000, () => {
  console.log('Server draait op poort 3000');
});
