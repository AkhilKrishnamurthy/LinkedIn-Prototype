var connection =  new require('./kafka/connections');
var mongoose = require("mongoose");
var applicantsignup = require("./services/applicantsignup");
var user_login = require("./services/userLoginKafka");
var postJob_recruiter = require("./services/postJobRecruiterKafka");
var fetchprofile = require("./services/fetchprofile");
var updatepersonaldetails = require("./services/updatepersonaldetails");
var updateskills = require("./services/updateskills");
var updateexperience = require("./services/updateexperience");
function handleTopicRequest(topic_name, fname) {
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function(message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function(err, res) {
      console.log("after handle" + JSON.stringify(res));
      
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
handleTopicRequest("postJob_recruiter_topic", postJob_recruiter);
handleTopicRequest('fetchprofile1_topic',fetchprofile);
handleTopicRequest('updatepd_topic',updatepersonaldetails);
handleTopicRequest('updateskills_topic',updateskills);
handleTopicRequest('updateexp_topic',updateexperience);