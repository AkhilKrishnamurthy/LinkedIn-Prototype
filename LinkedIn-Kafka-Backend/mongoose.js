const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  // username: { type: String, trim: true, index: { unique: true } },
  email: { type: String, trim: true, index: { unique: true } },
  password: { type: String, required: true },
  Fname: { type: String, trim: true, default: "" },
  Lname: { type: String, trim: true, default: "" },
  education: { type: String, trim: true, default: "" },
  phone: { type: String, trim: true, default: "" },
  aboutMe: { type: String, trim: true, default: "" },
  company: { type: String, trim: true, default: "" },
  city: { type: String, trim: true, default: "" },
  state: { type: String, trim: true, default: "" },
  zip: { type: String, trim: true, default: "" },
  gender: { type: String, trim: true, default: "" },
  experience: { type: String, trim: true, default: "" },
  skills: { type: String, trim: true, default: "" },
  isRecruiter: { type: Boolean, trim: true, default: `0` },
  isApplicant: { type: Boolean, trim: true, default: `0` },
  adminid: { type: Number, trim: true, default: "" }
});

var Messages = new Schema({
  prop_id: { type: Number, trim: true },
  message_id: { type: Date, trim: true },
  message: { type: String },
  ownername: { type: String, trim: true },
  travelername: { type: String, trim: true }
});

var PropertySchema = new Schema({
  prop_id: { type: Number, trim: true, index: { unique: true } },
  headline: { type: String, trim: true, index: { unique: true } },
  type: { type: String, required: true },
  location: { type: String, trim: true, default: "" },
  bed: { type: Number, trim: true, default: "" },
  bath: { type: Number, trim: true, default: "" },
  startdate: { type: String, trim: true, default: "" },
  enddate: { type: String, trim: true, default: "" },
  currencytype: { type: String, trim: true, default: "" },
  rate: { type: String, trim: true, default: "" },
  minstay: { type: Number, trim: true, default: "" },
  maxadults: { type: Number, trim: true, default: "" },
  maxchild: { type: Number, trim: true, default: 0 },
  availability: { type: Boolean, trim: true, default: 0 },
  description: { type: String, trim: true, default: "" },
  unit: { type: String, trim: true, default: "" },
  city: { type: String, trim: true, default: "" },
  state: { type: String, trim: true, default: "" },
  zip: { type: String, trim: true, default: "" },
  country: { type: String, trim: true, default: "" },
  address: { type: String, trim: true, default: "" }
});
var JobPostings = new Schema({
  job_id: { type: Number, trim: true },
  title: { type: String, trim: true, default: "" },
  description: { type: String, trim: true, default: "" },
  industry: { type: String, trim: true, default: "" },
  //properties: [{ type: PropertySchema }]
  emptype: { type: String, trim: true, default: "" },
  location: { type: String, trim: true, default: "" },

  jobfunction: { type: String, trim: true, default: "" },
  posteddate: { type: String, trim: true, default: "" }
});

var LinkedInSchema = new Schema({
  user: { type: UserSchema },
  properties: [{ type: PropertySchema }],
  JobPostings: [{ type: JobPostings }],
  appliedJobs: [{ type: JobPostings }],
  //listings: [{ type: Listings }],
  connections: [{ type: UserSchema }]
});

let HomeAway = mongoose.model("linkedin", LinkedInSchema, "linkedin");
module.exports = HomeAway;
