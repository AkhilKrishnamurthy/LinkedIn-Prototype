var bcrypt = require("bcrypt");

var LinkedIn = require("../model/linkedin");
const saltRounds = 10;
function handle_request(msg, callback) {
  var res = {};
  console.log("In recruiter signup handle request:" + JSON.stringify(msg));

  console.log("signup message", msg);

  bcrypt.hash(msg.password, saltRounds, function(err, hash) {
    hashed_password = hash;

    var myobj = new LinkedIn({
      user: {
        email: msg.email,
        password: hashed_password,
        Fname: msg.Fname,
        Lname: msg.Lname,
        accountType: "2"
      }
    });

    var promise = myobj.save();

    promise
      .then(function() {
        console.log("applicant inserted");
        res.value = msg;
        res.code = 200;
        callback(null, res);
      })

      .catch(function(err) {
        console.log("error:", err.message);
        if (err.message.includes("username_1 dup key:"))
          res.value = "This username already exists!";
        else res.value = "Error in registering data please try again!";

        res.code = "400";
        callback(null, res);
      });
  });
}

exports.handle_request = handle_request;
