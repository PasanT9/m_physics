const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const formidable = require("formidable");
const fileSystem = require("fs");
var GridStore = require('mongodb').GridStore;
var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

//import mediaRoutes from './routes/media.routes'


const app = express();
 
const InitiateMongoServer = require("./config/db");

const cors = require('cors');

const user = require("./routes/user");
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

//app.use("/file", file);
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

var dbConnection;// = mongoose.connection.db;
/*MongoClient.connect("mongodb://localhost:27017/m_physics_db", {journal: true}, function(err, db) {
  dbConnection = db;
  console.log("Connected to DB !!");
});*/

function StreamGridFile(req, res, GridFile) {
  if(req.headers['range']) {

    // Range request, partialle stream the file
    console.log('Range Reuqest');
    var parts = req.headers['range'].replace(/bytes=/, "").split("-");
    var partialstart = parts[0];
    var partialend = parts[1];

    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : GridFile.length -1;
    var chunksize = (end-start)+1;

    console.log('Range ',start,'-',end);

    res.writeHead(206, {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + GridFile.length,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      //'Content-Type': GridFile.contentType
    });

    // Set filepointer
    GridFile.seek(start, function() {
      // get GridFile stream
      var stream = GridFile.stream(true);

      // write to response
      stream.on('data', function(buff) {
        // count data to abort streaming if range-end is reached
        // perhaps theres a better way?
        start += buff.length;
        if(start >= end) {
          // enough data send, abort
          GridFile.close();
          res.end();
        } else {
          res.write(buff);
        }
      });
    });

  } else {

    // stream back whole file
    console.log('No Range Request');
    res.header('Content-Type', GridFile.contentType);
    res.header('Content-Length', GridFile.length);
    var stream = GridFile.stream(true);
    stream.pipe(res);
  }
}

app.get('/api/media', function(req, res) {
  console.log('GET request');
  new GridStore(mongoose.connection.db, new ObjectID("5fc7cf2ec823ee18556802aa"), null, 'r').open(function(err, GridFile) {
    if(!GridFile) {
      res.send(404,'Not Found');
      return;
    }
    
    StreamGridFile(req, res, GridFile)
  });
});