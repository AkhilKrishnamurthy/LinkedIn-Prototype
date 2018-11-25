var connection =  new require('./kafka/connections');
var mongoose = require("mongoose");
var applicantsignup = require("./services/applicantsignup");
var user_login = require("./services/userLoginKafka");
var postJob_recruiter = require("./services/postJobRecruiterKafka");
var getJobs = require("./services/getJobs");
var saveJob = require('./services/saveJob');
var savedJobs = require('./services/savedJobs');
var applyJob = require('./services/applyJob');
var userclicktrack = require("./services/userclick");
var jobPostingHistory = require("./services/jobPostingHistory");

function handleTopicRequest(topic_name, fname) {
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function(message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function(err, res) {
      console.log("after handle" + res);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res
          }),
          partition: 0
        }
      ];
      producer.send(payloads, function(err, data) {
        console.log(data);
      });
      return;
    });
  });
}

handleTopicRequest("user_login_topic", user_login),
handleTopicRequest("applicant_signup_topic", applicantsignup),
handleTopicRequest("postJob_recruiter_topic", postJob_recruiter),
handleTopicRequest("get_jobs_topic", getJobs),
handleTopicRequest("save_job_topic", saveJob),
handleTopicRequest("saved_jobs_topic", savedJobs),
handleTopicRequest("apply_job_topic", applyJob),
handleTopicRequest("user_click_topic", userclicktrack),
handleTopicRequest("job_posting_history_topic", jobPostingHistory);


