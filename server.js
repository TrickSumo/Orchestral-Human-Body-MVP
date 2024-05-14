const express = require("express");
const path = require("path");
const app = express();
const port = 3003;

// Middleware to set the required headers
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

// Serve the static files from the "public" directory
app.use(express.static("dist"));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
