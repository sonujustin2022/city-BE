const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors)
server.use(middlewares);

// Use router
server.use(router);

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server running on http://localhost:${PORT}`);
});