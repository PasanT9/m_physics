const express = require("express");
const bodyParser = require("body-parser");

//import mediaRoutes from './routes/media.routes'


const app = express();
 
const InitiateMongoServer = require("./config/db");

const cors = require('cors');

const user = require("./routes/user");
const media = require("./routes/media");
//app.use('/', mediaRoutes)


// Initiate Mongo Server
InitiateMongoServer();

app.use(cors());


// PORT
const PORT = process.env.PORT || 8081;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/media", media);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});