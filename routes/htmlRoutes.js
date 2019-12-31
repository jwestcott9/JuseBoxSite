var db = require("../models");
var path = require("path");


module.exports = function(app) {



app.get("/", function (req, res){
  res.sendFile(path.join(__dirname, "../public/homePage.html"))
})
app.get("/vendorRegister", function(req, res){
  res.sendFile(path.join(__dirname, "../public/register.html"))
})
app.get("/userPage", function(req, res){
  res.sendFile(path.join(__dirname, "../public/usersignup.html"))
})

app.get("/developer", function(req, res){
  res.sendFile(path.join(__dirname, "../public/developer.html"))
})
}

