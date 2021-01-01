const mongoose = require("mongoose");

const MediaScheme = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: { 
    type: String,
    required: true
  },
  media_object: {
    type: String,
    required: true
  },
  thumbnail_object: {
    type: String,
    required: true
  }
},
{
 collection : 'media' 
});

// export model user with MediaScheme
module.exports = mongoose.model("media", MediaScheme);