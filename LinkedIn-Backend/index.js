var express = require("express");

var app = express();
const multer = require('multer');
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
const mongoClient = require("mongodb").MongoClient();

var cors = require("cors");

//Passport authentication
var passport = require("passport");


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      console.log("multer file", file);
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

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

require("./config/passport")(passport);

//Kafka
var kafka = require("./kafka/client");
var applicantsignup = require("./controllers/applicantsignup");
var postJobRecruiter = require("./controllers/postJobRecruiter");
var jobs = require("./controllers/jobs");
var saveJob = require('./controllers/saveJob');
var savedJobs = require('./controllers/savedJobs');

app.post("/applicant/signup", (req, res) => {
  applicantsignup.applicantsignup(req, res);
});

app.post("/submitJobDetails", (req, res) => {
  console.log(req.body);
  req.body.user = req.session.user;
  postJobRecruiter.postJobRecruiter(req,res);
});

app.post("/login", function(req, res) {
  console.log("Inside Login Post Request", req.body);
  kafka.make_request("user_login_topic", req.body, function(err, results) {
    console.log("in result");
    console.log(results.code);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again."
      });
      console.log("mismatch login");
      res.value =
        "The email and password you entered did not match our records. Please double-check and try again.";
      console.log(res.value);
      res.sendStatus(400).end();
    } else if (results.code == 200) {
      console.log("Inside else");
      console.log("success login");
      // res.value = user;
      req.session.user = results.value.user.email;
      console.log("session to be set",results.value.user.email);
      console.log("resres", results);
      res.sendStatus(200).end();
    } else {
      res.value =
        "The email and password you entered did not match our records. Please double-check and try again.";
         res.sendStatus(400).end();
    }
  });
});

app.post('/upload_file', upload.any(), (req, res) => {
res.send();
});

app.use('/jobs', jobs);

app.use('/save-job', saveJob);
app.use('/saved-jobs', savedJobs);

console.log("Linked Backend!");
app.listen(3001);
console.log("Server Listening on port 3001");
