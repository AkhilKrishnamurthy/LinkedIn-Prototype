var express = require("express");
var redis = require("redis");
var client = redis.createClient();

var app = express();
const multer = require('multer');
var bodyParser = require("body-parser");
var session = require("express-session");
var jobPosts = require('./model/jobPosts');
var cookieParser = require("cookie-parser");
const mongoClient = require("mongodb").MongoClient();
var mysql = require("mysql");
var {mongoose} = require('./mongoose');


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


var con = mysql.createPool({
  connectionLimit: 100,
  host: "linkedinteam1.c4redet1j4es.us-west-1.rds.amazonaws.com",
  user: "linkedin",
  password: "linkedin",
  database: "linkedin"
});

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
var jobsearch = require("./controllers/jobsearch")
var applyJob = require("./controllers/applyJob");
var jobPostingHistory = require("./controllers/jobPostingHistory");
var getProfile = require('./controllers/getProfile');


client.on("connect", function() {
  console.log("Redis client connected");
});

client.on("error", function(err) {
  console.log("Something went wrong " + err);
});
client.set("my test key", "my test value", redis.print);
client.get("my test key", function(error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log("GET result ->" + result);
});
var getAppliedJobs = require('./controllers/getAppliedJobs');

app.post("/applicant/signup", (req, res) => {
  applicantsignup.applicantsignup(req, res);
});

app.post("/submitJobDetails", (req, res) => {
  console.log(req.body);
  req.body.user = req.session.user;
  console.log(req.session.user);
  postJobRecruiter.postJobRecruiter(req,res);
});

app.get("/JobPostingHistory", (req, res) => {
  // req.body.user = req.session.user;
  console.log("inside job posting history");
  jobPostingHistory.jobPostingHistory(req,res);
});

app.post("/login", function(req, res) {
  console.log("req.url", req.query);
  console.log("Inside Login Post Request", req.body);

  // return client.get("/login", (err, result) => {
  const query = req.body.username + req.body.password;
  return client.get(`login:${query}`, (err, result) => {
    console.log("result redis", JSON.stringify(result));
    // If that key exist in Redis store
    if (result) {
      console.log("result redis", JSON.stringify(result));
      const resultJSON = result;
      req.session.user = req.body.username;
      console.log(req.session.user);
      return res.status(200).send(resultJSON);
    } else {
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
          console.log(results);
          console.log("session to be set", results.value[0].email);
          req.session.user = results.value[0].email;
          console.log("resres", results);
          //res.sendStatus(200).end();
          // const responseJSON = req.session.user;
          const responseJSON = { value: req.session.user };
          // Save the Wikipedia API response in Redis store
          client.setex(
            `login:${query}`,
            3600,
            //source: "Redis Cache",
            JSON.stringify({ source: "Redis cache", value: req.session.user })
          );
          console.log("respnose json", responseJSON);
          res.status(200).send({ value: req.session.user });
        } else {
          res.value =
            "The email and password you entered did not match our records. Please double-check and try again.";
          res.sendStatus(400).end();
        }
      });
    }
  });
});

app.post('/jobs/search', function(req,res){
  // console.log("Inside search jobs" + req.body.jobTitle + " " + req.body.location);
 
    jobPosts.find(
         {$and: [
               {jobTitle : req.body.jobTitle} , 
               {location : req.body.location } 
           ]
         }, function(err,jobs){
             console.log("Inside jobs search again")
             if (err) {
                 console.log("err");
                 res.code = "400";
                 res.value = "Fetching jobs failed";
                 console.log(res.value);
                 res.sendStatus(400).end(); 
             } else{
                 console.log("success")
                 res.code = "200";
                 res.value = jobs;
                 console.log("Jobs list fetched" + JSON.stringify(jobs));
                 res.send(JSON.stringify(jobs));
             }
         })
   
 })


app.post('/upload_file', upload.any(), (req, res) => {
res.send();
});



app.use('/jobs', jobs);

app.use('/save-job', saveJob);
app.use('/saved-jobs', savedJobs);
var analytics = require("./controllers/analytics");
app.post("/analytics/userclicks",
 function(req, res) {
   analytics.userclicks(req, res);
 });

app.use('/apply-job', applyJob);
app.use('/getAppliedJobs',getAppliedJobs);
app.use('/get-profile', getProfile);




console.log("Linked Backend!");
app.listen(3001);
console.log("Server Listening on port 3001");
