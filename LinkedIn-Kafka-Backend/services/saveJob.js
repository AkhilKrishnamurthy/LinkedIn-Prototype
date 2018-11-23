var Model = require('../model/linkedin');

function handle_request(message, callback){
    console.log('message:', message);
    //console.log('session', message.session.user)

    Model.findOneAndUpdate({
        "user.email" : message.session.user
    },
    {
        $push:{
            savedjobs: message.body.jobDetails
        }
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