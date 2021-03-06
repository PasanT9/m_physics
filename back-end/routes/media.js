const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { check, validationResult} = require("express-validator/check");

const AccessList = require("../model/AccessList");
const Media = require("../model/Media");

var GridStore = require('mongodb').GridStore;
var ObjectID = require('mongodb').ObjectID;

/*var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;*/

const router = express.Router();

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
        //'Content-Type': "video/mp4"
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


  router.get(
    "/list",
    [],
    async (req, res) => {

      console.log(req.body);
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]

      console.log(token);
      
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }

      try {
        const verifiedJwt = jwt.verify(token, 'randomString');

        const student_id = verifiedJwt.user.student_id;

        let user = await AccessList.findOne({
          student_id
        });

        if (!user){
          return res.status(400).json({
            message: "User Not Exist"
          });
        }

        let allowed_media = user.media;

        let media =  await Media.find({
          id: allowed_media
        });

        console.log(media);
        res.status(200).json({
          media
        });
      }
      catch(e)
      {
        res.status(401).json({
          message: "Unauthorized"
        });
      }
    }
  );

router.get(
  "/watch/:id",[],
  async (req, res) => {
      console.log('GET request');
      new GridStore(mongoose.connection.db, new ObjectID(req.params.id), null, 'r').open(function(err, GridFile) {
        if(!GridFile) {
          res.send(404,'Not Found');
          return;
        }
        
        StreamGridFile(req, res, GridFile)
      });
  }
);

router.get(
  "/thumbnail/:id",[],
  async (req, res) => {

      new GridStore(mongoose.connection.db, new ObjectID(req.params.id), null, 'r').open(function(err, GridFile) {
        if(!GridFile) {
          res.send(404,'Not Found');
          return;
        }
        
        StreamGridFile(req, res, GridFile)
      });
  }
);

  module.exports = router;