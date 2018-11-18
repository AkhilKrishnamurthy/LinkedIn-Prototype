var postJob = require("../model/jobPosts");

function handle_request(msg, callback) {
  console.log("Connected to kafka post job!");
  console.log(msg);
  var res = {};
  var myobj = new postJob({
      user: msg.user,  
      companyName: msg.companyName,
      jobTitle: msg.jobTitle,
      industry: msg.industry,
      employmentType: msg.employmentType,
      location: msg.location,
      seniorityLevel: msg.seniorityLevel,
      jobDescription: msg.jobDescription,
      companyLogo: msg.images
  });
  var promise = myobj.save();
  promise
      .then(function() {
        console.log("new job inserted");
        res.value = msg;
        res.code = 200;
        callback(null, res);
      })

      .catch(function(err) {
        console.log("error:", err.message);
        res.value = "unable to insert job";

        res.code = "400";
        callback(null, res);
      });
  
}
exports.handle_request = handle_request;
