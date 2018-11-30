var Model = require('../model/linkedin');

function handle_request(message, callback){
    console.log('Inside get Pending requests kafka, email ', message.session.user);
    Model.findOne({
        "user.email": message.session.user 
    }, (err, result)=>{
        if(err){
            onsole.log('Error in getting pedning requests');
            callback(err, null);
        }
        else{
            console.log('Retrieval success', result.connectionRequests);
            callback(null, result.connectionRequests);
        }
    });
}

exports.handle_request = handle_request;