var Model = require("../model/savedJobs");

function handle_request(message, callback) {
  Model.find({}, { _id: 0 }, (err, result) => {
    if (err) {
      console.log("Error in Retrieving saved job  data", err);
      callback(err, null);
    } else {
      console.log("saved job data", result);
      callback(null, result);
    }
  });
}
exports.handle_request = handle_request;