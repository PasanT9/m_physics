const mongoose = require("mongoose");

const NoteScheme = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: { 
    type: String,
    required: true
  },
  note_object: {
    type: String,
    required: true
  }
},
{
 collection : 'notes' 
});

// export model user with MediaScheme
module.exports = mongoose.model("notes", NoteScheme);