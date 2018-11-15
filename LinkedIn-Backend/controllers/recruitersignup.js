var kafka = require("../kafka/client");
const jwt = require("jsonwebtoken");
exports.applicantsignup = function(req, res) {
  console.log("Inside applicant signup Request Handler");
  console.log(req.body);
  kafka.make_request(
    "recruiter_signup_topic",
    {
      email: req.body.Email,
      password: req.body.Password,
      Fname: req.body.Fname,
      Lname: req.body.Lname
    },
    function(err, result) {
      if (err) {
        throw err;
      } else {
        console.log("applicant inserted");
        const body = { _id: req.body.Email, type: "recruiter" };
        const token = jwt.sign({ user: body }, "verified_linkedinUser");
        res.status(200).send(token);
      }
    }
  );
};
