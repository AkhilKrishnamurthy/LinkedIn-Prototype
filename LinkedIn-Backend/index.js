var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const mongoClient = require('mongodb').MongoClient();

var cors = require('cors');

//Passport authentication
var passport = require('passport');


// mongoClient.connect('mongodb://linkedin:linkedinteam1@ds159263.mlab.com:59263/linkedin', (err,client) => {
//       if(err) {
//           console.log("Error connecting to mongo database");
//       }
//       else {
//           console.log("connection successul");
//           client.close();
//       }
//       callback(null,)
//   })

//set up cors
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//set up session variable

app.use(session({
    secret: 'linkedin',
    resave: false,
    saveUninitialized: false,
    duration: 60 * 60 * 100,
    activeDuration: 5 * 60 * 100
}));

app.use(bodyParser.json());

//Allow acceess control headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// Bring in defined Passport Strategy
require('./config/passport')(passport);

//Kafka
var kafka = require('./kafka/client');


app.post('/login',function(req,res){
    
    console.log("Inside Login Post Request", req.body);
    kafka.make_request('user_login',req.body, function(err,results){
        console.log('in result');
        console.log(results.code);
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            })
            console.log("mismatch login");
            res.value = "The email and password you entered did not match our records. Please double-check and try again.";
            console.log(res.value);
            res.sendStatus(400).end(); 
        }else if(results.code==200){
            console.log("Inside else");
                console.log("success login");
                // res.value = user;
                console.log("resres",results);
                // req.session.user = results.value.username;
                // res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
                //  console.log("token",token);
                // res.status(200).json({success: true, token: 'JWT ' + token});
                res.sendStatus(200).end();
            }
            else {
                res.value = "The email and password you entered did not match our records. Please double-check and try again.";
                res.sendStatus(400).end(); 
            }
        
    });
       
});
app.listen(3001);
console.log("Linked Backend!");
