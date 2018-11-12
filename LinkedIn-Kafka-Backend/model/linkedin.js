const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  // username: { type: String, trim: true, index: { unique: true } },
  adminid: { type: Number, trim: true, default: "" },
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
  isApplicant: { type: Boolean, trim: true, default: `0` }
});
var Job = new Schema({
  job_id: { type: Number, trim: true },
  title: { type: String, trim: true, default: "" },
  description: { type: String, trim: true, default: "" },
  industry: { type: String, trim: true, default: "" },

  emptype: { type: String, trim: true, default: "" },
  location: { type: String, trim: true, default: "" },
  companyid: { type: Number, trim: true },

  jobfunction: { type: String, trim: true, default: "" },
  posteddate: { type: String, trim: true, default: "" }
});
/*
var JobPostings = new Schema({
  job_id: { type: Number, trim: true },
  title: { type: String, trim: true, default: "" },
  description: { type: String, trim: true, default: "" },
  industry: { type: String, trim: true, default: "" },
  emptype: { type: String, trim: true, default: "" },
  location: { type: String, trim: true, default: "" },

  jobfunction: { type: String, trim: true, default: "" },
  posteddate: { type: String, trim: true, default: "" }
});
*/
var JobDetails = new Schema({
  job: { type: Job },
  views: [{ type: UserSchema }],
  applicants: [{ type: UserSchema }]
});

var LinkedInSchema = new Schema({
  user: { type: UserSchema },
  JobPostings: [{ type: JobDetails }],
  appliedJobs: [{ type: JobDetails }],
  connections: [{ type: UserSchema }]
  //  jobDetails: [{ type: JobDetails }]
});

let LinkedIn = mongoose.model("linkedin", LinkedInSchema, "linkedin");
module.exports = LinkedIn;
