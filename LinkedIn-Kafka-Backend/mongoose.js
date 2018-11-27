const mongoose = require("mongoose");
const options = {
  poolSize: 100
};
mongoose.Promise = global.Promise;
//"mongodb://localhost:27017/HomeAway",
// "mongodb://sojanmathew:sojanm28@ds133920.mlab.com:33920/homeaway",
mongoose
  .connect(
    "mongodb://54.162.95.104:27019/local",
    options
  )
  .then(console.log("mlabs connected"));

module.exports = mongoose;
