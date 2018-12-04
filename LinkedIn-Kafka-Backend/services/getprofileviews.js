var Model = require("../model/profileViews");

function handle_request(message, callback) {
  console.log("message.username for clicked jobs");
  //   Model.find(
  //     { profileEmail: message.username },

  //     { _id: 0 },
  //     (err, result) => {
  //       if (err) {
  //         console.log("Error in Retrieving profile view  data", err);
  //         callback(err, null);
  //       } else {
  //         console.log("profile view  data", result);
  //         callback(null, result);
  //       }
  //     }
  //   );
  //}

  var pipeline = [
    { $match: { profileEmail: message.username } },
    {
      $project: {
        viewTime: { $substr: ["$viewTime", 0, 10] }
        //   viewTime: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }
      }
    },
    { $limit: 50 }
  ];
  var res = {};
  var promise = Model.aggregate(pipeline).exec();
  promise
    .then(function(data) {
      console.log("top 10 job data-");
      console.log(data);
      res.value = data;
      if (data) {
        res.code = 200;
        callback(null, res);
      }
    })
    .catch(function(err) {
      // just need one of these
      console.log("error:", err.message);
      res.code = "400";
      callback(err, res);
    });
}
exports.handle_request = handle_request;
