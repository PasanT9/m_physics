const mongoose = require("mongoose");

const TaskScheme = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  mcq: { 
    type: String,
    required: true
  },
  structured: {
    type: String,
    required: true
  },
  essay: {
    type: String,
    required: true
  },
  other: {
      type: String,
      required: true
  },
  due_data: {
    type: String,
    required: true
  },
  tute: {
    type: Number,
    required: true
  }
},
{
 collection : 'tasks' 
});

// export model user with MediaScheme
module.exports = mongoose.model("tasks", TaskScheme);