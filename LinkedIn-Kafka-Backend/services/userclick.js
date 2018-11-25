var ClickedJobs = require("../model/clickedjobs");

/**************Track Job Clicks *********************/
function handle_request(msg, callback) {
 var res = {};
 console.log("Inside job click", msg);
 
 var myobj = new ClickedJobs({
   jobData: msg.body.jobData
 });

//  var promise = myobj.save();
//  promise
//    .then(function() {
//      res.value = msg;
//      res.code = 200;
//      callback(null, res);
//    })

//    .catch(function(err) {
//      console.log("error:", err.message);

//      res.code = "400";
//      callback(null, res);
//    });
myobj.save().then((doc)=>{
  console.log('Result fromkakfka', doc);
  callback(null, doc);
}, (err) =>{
  callback(err, null);

});
}
exports.handle_request = handle_request;