const mongoose = require("mongoose");

const FileScheme = mongoose.Schema({
  file_id: {
    type: Number,
    required: true
  },
  title: { 
    type: String,
    required: true
  },
  object: {
    type: String,
    required: true
  }
},
{
 collection : 'files' 
});

// export model user with MediaScheme
module.exports = mongoose.model("files", FileScheme);