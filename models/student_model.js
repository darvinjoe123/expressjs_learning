const mongoose = require("mongoose")

var studentSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    age : String,
    dob : String,
    department : String
});


var StudentModel = mongoose.model("Student",studentSchema);

module.exports = StudentModel;