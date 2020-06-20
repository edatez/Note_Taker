

const express = require("express");
const htmlRoutes =require ("./Routes/htmlRoutes");
const apiRoutes = require ("./Routes/apiRoutes");
var PORT = process.env.PORT || 3000;
const app = express();

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use ("/api", apiRoutes);
app.use (htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});

