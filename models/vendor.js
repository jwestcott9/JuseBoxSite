var mongoose = require("mongoose");

var Shema = mongoose.Schema;

const NewUser = new Schema ({
    name: {
        type: String
    }
})