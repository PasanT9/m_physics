const mongoose = require("mongoose");

const AccessListSchema = mongoose.Schema({
  student_id: {
    type: String,
    required: true
  },
  media: { 
    type: Array,
    required: true
  },
  notes: {
    type: Array,
    required: true
  }
},
{
 collection : 'access_list' 
});

// export model user with AccessList
module.exports = mongoose.model("access_list", AccessListSchema);