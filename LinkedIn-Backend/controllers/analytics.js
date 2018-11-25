var kafka = require("../kafka/client");

exports.userclicks = function(req, res) {
 console.log(req.body);

 console.log("inside user click req");

 kafka.make_request("user_click_topic", req, function(
   err,
   result
 ) {
   console.log("in post-user_click_topic");
   console.log(req.body);
   if (err) {
     console.log("err", err);
     res.status(500).send({ message: "Server Error!" });
   } else {
     console.log("user clicked Successful!");
     res.status(200).send({ message: "User clicke recorded" });
   }
 });
};
exports.savedjobs = function(req, res) {
 console.log(req.body);

 console.log("inside user click req");
 //let selectQuery = "SELECT max(prop_id) as prop_id from homeaway.property;";
 kafka.make_request("saved_jobs_topic", { job: req.body }, function(
   err,
   result
 ) {
   console.log("in saved_jobs_topic");
   console.log(req.body);
   if (err) {
     console.log("err", err);
     res.status(500).send({ message: "Server Error!" });
   } else {
     console.log("user clicked Successful!");
     res.status(200).send({ message: "saved jobs in analytics" });
   }
 });
};
exports.completeforms = function(req, res) {
 console.log(req.body);
 console.log("inside completed forms tracking req");
 kafka.make_request("completed_forms_topic", { job: req.body }, function(
   err,
   result
 ) {
   console.log("in completed_forms_topic");
   console.log(req.body);
   if (err) {
     console.log("err", err);
     res.status(500).send({ message: "Server Error!" });
   } else {
     console.log("user clicked Successful!");
     res.status(200).send({ message: "completed form recorded" });
   }
 });
};