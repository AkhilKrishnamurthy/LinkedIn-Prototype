var jobPosts = require("../model/jobPosts");

function handle_request(msg, callback) {
  console.log("Connected!");
  var jobTitle = msg.jobTitle;
  var location = msg.location;
  console.log(msg);
  var res = {};
  jobPosts.find(
    {
      "user.email": msg.username
    },
    function(err, result) {
      if (err) {
        res.code = "400";
        console.log("mismatch1");
        res.value =
          "The email and password you entered did not match our records. Please double-check and try again.";
        console.log(res.value);
      } else {
          console.log("response from db", result);
          if (result == null) {
            res.code = "400";
            console.log("mismatch1");
            res.value = "The email and password you entered did not match our records. Please double-check and try again.";
            console.log(res.value);
            callback(null, res);
          } else if (
            bcrypt.compareSync(msg.password, result.user.password) == true
          ) {
            console.log("success login");
            res.code = "200";
            res.value = result;
            console.log("login result", result);
            callback(null, res);
          } else {
            console.log("bcrypt mismatch");
            res.code = "400";
            callback(null, res);
        }
      }
    }
  );
}
exports.handle_request = handle_request;
