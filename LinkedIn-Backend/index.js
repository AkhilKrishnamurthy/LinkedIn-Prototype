var express = require("express");

var app = express();

var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");

var cors = require("cors");

//Passport authentication
var passport = require("passport");

//set up cors
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//set up session variable

app.use(
  session({
    secret: "linkedin",
    resave: false,
    saveUninitialized: false,
    duration: 60 * 60 * 100,
    activeDuration: 5 * 60 * 100
  })
);

app.use(bodyParser.json());

//Allow acceess control headers
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

// Bring in defined Passport Strategy
require("./config/passport")(passport);

//Kafka
var kafka = require("./kafka/client");
var applicantsignup = require("./controllers/applicantsignup");

app.post("/applicant/signup", (req, res) => {
  applicantsignup.applicantsignup(req, res);
});

console.log("Linked Backend!");
app.listen(3001);
console.log("Server Listening on port 3001");
