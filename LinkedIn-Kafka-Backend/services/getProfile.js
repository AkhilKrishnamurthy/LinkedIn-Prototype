var Model = require('../model/linkedin_mockup');

function handle_request(message, callback){

    Model.find({
        "email" : "khannay0@narod.ru"
    }, (err, result)=>{
        if(err){
            console.log('Error in Retrieving profile data', err);
            callback(err, null);
        }
        else{
            console.log('Profile data', result);
            callback(null, result);
        }
    });

}

exports.handle_request = handle_request;