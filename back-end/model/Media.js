const mongoose = require("mongoose");

const MediaScheme = mongoose.Schema({
  media_id: {
    type: Number,
    required: true
  },
  name: { 
    type: String,
    required: true
  },
  object: {
    type: String,
    required: true
  }
},
{
 collection : 'media' 
});

// export model user with MediaScheme
module.exports = mongoose.model("media", MediaScheme);