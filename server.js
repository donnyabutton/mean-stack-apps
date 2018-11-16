//building an app with mean stack using tutorial 11-15-28

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const index = require("./routes/index");
const tasks = require("./routes/tasks");

const port = 3000;

const app = express();

//view Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", " ejs");
app.engine("html", require("ejs").renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, "client")));

//Body Parser Middle Ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/api", tasks);

app.listen(port, () => {
  console.log("server listing on port " + port);
});
