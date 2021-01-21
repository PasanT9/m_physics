const express = require("express");
const bodyParser = require("body-parser");

//import mediaRoutes from './routes/media.routes'


const app = express();
 
const InitiateMongoServer = require("./config/db");

const cors = require('cors');

const user = require("./routes/user");
const media = require("./routes/media");
const task = require("./routes/task");

//app.use('/', mediaRoutes)

app.use(cors());
app.use(bodyParser.json());

// Initiate Mongo Server
InitiateMongoServer();



// PORT
const PORT = process.env.PORT || 8081;

// Middleware

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/media", media);
app.use("/task", task)

//app.use("file", file);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});