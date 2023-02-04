const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

app.use(cors());
const initRoutes = require("./src/routes");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 7654;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});