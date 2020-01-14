const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res) {
  var fn = req.body.fn;
  var ln = req.body.ln;
  var email = req.body.email;
});

app.listen(3000, function() {
  console.log("Server started at port 3000");
});
