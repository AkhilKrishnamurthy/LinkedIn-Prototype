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

app.post("/applicant/signup", (req, res) => {
  applicantsignup.applicantsignup(req, res);
});

app.post("/submitJobDetails", (req, res) => {
  console.log(req.body);
  req.body.user = req.session.user;
  postJobRecruiter.postJobRecruiter(req,res);
});



app.post("/login", function(req, res) {
  console.log("Inside Login Post Request 1", req.body);
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


//****************************** */

// profile route starts


app.post('/FetchProfile',function(req,res){

  console.log("inside fetch profie route",req.body);

  kafka.make_request("fetchprofile1_topic", req.body, function(err, results) {

      console.log("Inside Profile Fetch ");
      console.log(typeof results);
  
      if (err) {
        console.log("Inside err");
        res.json({
          status: "error",
          msg: err
        });
      } else {
        if (typeof results === "string") {
          res.sendStatus(400).end();
        } else {
          res.code = "200";
          res.send({
            docs:results                                 //docs:results.docs
          });
          console.log("Profile is popluated by data");
          res.end("Profile is populated");
        }
      }
    });      
  
})



//axios profile save changes - Personal Details start


app.post('/updatepdprofile',function(req,res){
    
  console.log("Inside Update Profile Post Request mlab");
  console.log("request body is",req.body);
  kafka.make_request("updatepd_topic", req.body, function(err, results) {

    console.log("Inside Personal detail Update Profile ");
    console.log(typeof results);

    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: err
      });
    }
    else {
      console.log("inside else1");
      if (results.code === "400") {
       // console.log(results.value);
       console.log("inside 400");
        res.sendStatus(400).end();
      } else if(results.code === "200"){
        res.code = "200";
        console.log(" PD is updated");
        res.sendStatus(200).end("PD of the profile is updated");
        }
    }
    });      
  
});



//axios profile save changes - Personal Details end


//axios profile save changes - Experience start


app.post('/updateexpprofile',function(req,res){
    
  console.log("Inside Update Profile Post Request mlab");
  console.log("request body is",req.body);
  kafka.make_request("updateexp_topic", req.body, function(err, results) {

    console.log("Inside Experience Update Profile ");
    console.log(typeof results);

    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: err
      });
    } else {
      console.log("inside else1");
      if (results.code === "400") {
       // console.log(results.value);
       console.log("inside 400");
        res.sendStatus(400).end();
      } else if(results.code === "200"){
        res.code = "200";
        console.log(" Experience is updated1233");
        res.sendStatus(200).end("Experience of the profile is updated");
        }
    }
    });      
  
});



//axios profile save changes _ Experience end


//axios profile save changes _ Education start


app.post('/updateeduprofile',function(req,res){
    
  console.log("Inside Update Profile Post Request mlab");
  console.log("request body is",req.body);
  kafka.make_request("updateedu_topic", req.body, function(err, results) {

    console.log("Inside Update Education Profile ");
    console.log(typeof results);

    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: err
      });
    } else {
      if (results.code === 400) {
        console.log(results.value);
        res.sendStatus(400).end();
      } else if(results.code === 200){
        res.code = "200";
        console.log("Education  is updated");
        res.sendStatus(200).end("Education of the profile is updated");
        }
      }
    });      
  
});


//axios profile save changes _ Education end

//axios profile save changes _ Skills start

app.post('/updateskillsprofile',function(req,res){
    
  console.log("Inside Update Profile Post Request mlab");
  console.log("request body is",req.body);
  kafka.make_request("updateskills_topic", req.body, function(err, results) {

      console.log("Inside Update Profile ");
      console.log(typeof results);
  
      if (err) {
        console.log("Inside err");
        res.json({
          status: "error",
          msg: err
        });
      } else {
        console.log("inside else1");
        if (results.code === "400") {
         // console.log(results.value);
         console.log("inside 400");
          res.sendStatus(400).end();
        } else if(results.code === "200"){
          res.code = "200";
          console.log(" Skills is updated");
          res.sendStatus(200).end("Skills of the profile is updated");
          }
      }
    });      
  
});



//axios profile save changes _ Skills end


//profile route ends

//************************** */
console.log("Linked Backend!");
app.listen(3001);
console.log("Server Listening on port 3001");
