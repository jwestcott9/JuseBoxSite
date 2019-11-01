var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");



// Require all models
var db = require("./models");

var PORT = process.env.PORT || 8000;

// Initialize Express
var app = express();

require("./routes/htmlRoutes")(app);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/juseUsers";

mongoose.connect(MONGODB_URI);

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/juseUsers", {
  useNewUrlParser: true
});

app.get('/checkdatabase/:email', function( req, res){
  db.User.find({email: req.params.email}).then( function(user){
   console.log(user);
    if(user[0].email){
      res.json(true)
      console.log(user)
    }else{
      res.json(false)
    }
    
  }).catch(function(err){
    res.json(false);
    console.log(err)
  })
})


app.get('/getall', function(req, res){
  db.User.find({}).then(function(users){
    console.log(users);
    res.json(users);
  }).catch (function(err){
    res.json(err);
  })
})
app.post('/postUser', function(req, res){
    db.User.create(req.body).then(function(user){
        console.log(user);
       
    }).then( function(user){
      res.json(user);
      console.log(user);
    }).catch(function (err){
      res.json(err);
      console.log(err);
    })
})
module.exports = app;
// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});