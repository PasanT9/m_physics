const mongoose = require("mongoose");

const  Grid  = require('gridfs-stream');
Grid.mongo = mongoose.mongo
let gridfs = null

// Replace this with your MONGOURI.
//const MONGOURI = "mongodb://localhost:27017/m_physics_db";
const MONGOURI = "mongodb://localhost:27017/m_physics_db";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    gridfs = Grid(mongoose.connection.db);
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;