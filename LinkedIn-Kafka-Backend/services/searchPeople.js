var linkedinUser = require("../model/linkedin");
var regex = require("regex");

function handle_request(msg, callback) {
  console.log("Connected to kafka search people!");
  console.log(msg);
  //msg.Fname = "wal whi";
  var res = {};
      linkedinUser.find({$or:[{"user.Fname": new regex(msg.query)},{"user.Fname": new regex(msg.Fname.split(' ')[1])} ]}, function (err,result) {
        if (err) {
            res.code = "400";
            console.log("No records exist");
            res.value =
              "No records exist";
            console.log(res.value);
            callback(err,res);
          } else {
              console.log("response from db", result);
              if (result == null) {
                res.code = "400";
                console.log("mismatch1");
                res.value = "No records exist";
                console.log(res.value);
                callback(null, res);
              } 
              else {
                console.log("result:" , result)
                res.code = "200";
                res.value = result;
                callback(null,res);
              }
            }
          }
      );
    }
exports.handle_request = handle_request;
