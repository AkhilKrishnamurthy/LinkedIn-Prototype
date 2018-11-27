var kafka = require("../kafka/client");
var express = require('express');
var redis = require("redis");
var router = express.Router();
var client = redis.createClient();

router.get('/', function (req, res) {

  var arr = [];
  var index = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const query = arr[index];
  return client.get(`getProfile:${query}`, (err, result) => {
    console.log("result redis", JSON.stringify(result));
    // If that key exist in Redis store
    if (result) {
      console.log("result redis", JSON.stringify(result));
      const resultJSON = result;
      return res.status(200).send(resultJSON);
    }
    else {
      kafka.make_request("get_profile_topic", query, function (err, result) {
        if (err) {
          console.log('Unable to get profile details.', err);
          res.writeHead(400, {
            'Content-type': 'text/plain'
          });
          res.end('Error in get profile details');
        }
        else {
          client.setex(
            `getProfile:${query}`,
            3600,
            JSON.stringify({ source: "Redis cache", value: result })
          );
          res.status(200).send({ value: result });
        }
      });
    }
  });
});


module.exports = router;