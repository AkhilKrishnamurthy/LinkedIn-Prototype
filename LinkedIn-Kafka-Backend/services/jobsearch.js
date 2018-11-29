var Model = require('../model/jobPosts');

function handle_request(message, callback){
    console.log('message:', message);
    //console.log('session', message.session.user)

    Model.find(
         {$and: [
              //  {jobTitle : req.body.jobTitle} , 
              { $or : [ { jobTitle : { $regex : new RegExp(message.body.jobTitle, "i") } }, { companyName : { $regex : new RegExp(message.body.companyName, "i") } } ]},
              { location : { $regex : new RegExp(message.body.location, "i") } },
           ]
         }, (err, doc)=>{
        if(err){
            console.log('Error in Save job');
            callback(err, null);
        }
        else{
            console.log('Save Job success!');
            callback(null, doc);
        }
    });
}

exports.handle_request = handle_request;