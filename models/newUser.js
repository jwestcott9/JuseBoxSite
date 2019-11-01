var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


const NewUser = new Schema ({
    name : {
        type: String,
        required: false,
        unique: false,
    },

    email: {
        type: String,
        required: false,
        unique: false
    },

})

var User = mongoose.model('User', NewUser);


module.exports = User;