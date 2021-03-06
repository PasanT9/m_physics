const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  student_id: {
    type: String,
    required: true
  },
  password: { 
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
},
{
 collection : 'users' 
});

// export model user with UserSchema
module.exports = mongoose.model("users", UserSchema);