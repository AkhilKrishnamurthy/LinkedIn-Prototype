var kafka = require("../kafka/client");

exports.jobsearch = function(req, res) {
  console.log("Inside search job Kafka");
  console.log(req.body);
  kafka.make_request("jobsearch_topic", req.body, function(err, results) {
    if (err) {
        res.json({
          status: "error",
          msg: "System Error, Try Again."
        });
        console.log("Unable to reach kafka search job");
        res.value = "Unable to reach kafka search job";
        console.log(res.value);
        res.sendStatus(400).end();
      } else if (results.code == 200) {
        console.log("results", results);
        res.sendStatus(200).end();
      } else {
        res.value =
          "Searching job failed";
           res.sendStatus(400).end();
      }

  });
};
