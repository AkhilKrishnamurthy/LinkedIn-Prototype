<<<<<<< HEAD
//var connection =  new require('./kafka/connections');
var connection = require("./Kafka/connections");
var mongoose = require("mongoose");
var applicantsignup = require("./services/applicantsignup");
var producer = connection.getProducer();
var consumer_applicant_signup = connection.getConsumer(
  "applicant_signup_topic"
);
=======
var connection =  new require('./kafka/connections');
var producer = connection.getProducer();

var user_login = require('./services/userLoginKafka.js');

>>>>>>> 22ab903d25c2b890d7635734428f32ffaab3477b

consumer_applicant_signup.on("message", function(message) {
  console.log("applicant signup message received");
  console.log(JSON.stringify(message.value));
  var data = JSON.parse(message.value);
  applicantsignup.handle_request(data.data, function(err, res) {
    console.log("after signup  handle" + res);
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
      console.log("Signed up");
      console.log(payloads);
      console.log(data);
    });
<<<<<<< HEAD
    return;
  });
});

/*

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
*/
=======
}

handleTopicRequest("user_login",user_login)
>>>>>>> 22ab903d25c2b890d7635734428f32ffaab3477b
