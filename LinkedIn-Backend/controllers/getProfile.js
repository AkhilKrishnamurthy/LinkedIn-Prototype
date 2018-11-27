var kafka = require("../kafka/client");
var express = require('express');
var redis = require("redis");
var router = express.Router();
var client = redis.createClient();

router.get('/', function(req, res){
        const query = "mtournayj@zdnet.com";
        return client.get(`getProfile:${query}`, (err, result) => {
          console.log("result redis", JSON.stringify(result));
          // If that key exist in Redis store
          if (result) {
            console.log("result redis", JSON.stringify(result));
            const resultJSON = result;
            return res.status(200).send(resultJSON);
          } else {
            kafka.make_request("get_profile_topic", req.body, function(err, results) {
              console.log("in result");
              console.log(results);
              if (err) {
                console.log("Inside err");
                res.json({
                  status: "error",
                  msg: "System Error, Try Again."
                });
                console.log("mismatch login");
                res.value =
                  "The email and password you entered did not match our records. Please double-check and try again.";
                console.log(res.value);
                res.sendStatus(400).end();
              } else if (results.code == 200) {
                console.log("Inside else");
                console.log("success login");
                // res.value = user;
                // console.log(results);
                // console.log("session to be set", results.value[0].email);
                // req.session.user = results.value[0].email;
                console.log("resres", results.value[0]);
                //res.sendStatus(200).end();
                // Save the Wikipedia API response in Redis store
                client.setex(
                  `getProfile:${query}`,
                  3600,
                  JSON.stringify({ source: "Redis cache", value: results.value[0] })
                );
                res.status(200).send({ value: results.value[0]  });
              } else {
                res.value =
                  "The email and password you entered did not match our records. Please double-check and try again.";
                res.sendStatus(400).end();
              }
            });
          }
        });
});


module.exports = router;