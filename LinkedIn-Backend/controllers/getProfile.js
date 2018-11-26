var kafka = require("../kafka/client");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    kafka.make_request('get_profile_topic', req, function(err, result){
        if(err){
            console.log('Unable to get profile data.', err);
            res.writeHead(400, {
                'Content-type': 'text/plain'
            });
            res.end('Error in getting profile data');
        }
        else{
            console.log('Get Profile data successful.', result);
            res.writeHead(200,{
                'Content-type' : 'application/json'
            });
            res.end(JSON.stringify(result));
        }
    });
});


module.exports = router;