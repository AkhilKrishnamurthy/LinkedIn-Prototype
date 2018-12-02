const mongoose = require("../mongoose");
const Schema = mongoose.Schema;


//experience schema for profile
var ExperienceSchema = new Schema({
  designation: { type: String },
  companyname: { type: String },
  location: { type: String},
  responsibility : {type: String}
});

//education schema for profile
var EducationSchema = new Schema({
  school: { type: String },
  degree: { type: String },
  fromyear: { type: String},
  toyear : {type: String}
});



var UserSchema = new Schema({
  // username: { type: String, trim: true, index: { unique: true } },
  adminid: { type: Number, trim: true, default: "" },
  email: { type: String, trim: true, index: { unique: true } },
  password: { type: String, required: true },
  Fname: { type: String, trim: true, default: "" },
  Lname: { type: String, trim: true, default: "" },
  education: [{ type: EducationSchema }],             //changed it from type:string to education schema profile
  phone: { type: String, trim: true, default: "" },
  aboutMe: { type: String, trim: true, default: "" },
  company: { type: String, trim: true, default: "" },
  city: { type: String, trim: true, default: "" },    
  state: { type: String, trim: true, default: "" },
  zip: { type: String, trim: true, default: "" },
  gender: { type: String, trim: true, default: "" },
  experience: {type:Array},             //changed it from type:string to experience schema profile
  skills: { type: String, trim: true, default: "" },
  //   isRecruiter: { type: Boolean, trim: true, default: `0` },
  //   isApplicant: { type: Boolean, trim: true, default: `0` }
  accountType: { type: Number, trim: true, default: "" } //1.Applicant2.Recruiter3.Both
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
  connections: [{ type: UserSchema }],
  savedjobs: [{ type: Job }],
  profileviews: [{ type: UserSchema }]
  //  jobDetails: [{ type: JobDetails }]
});






let LinkedIn = mongoose.model("LinkedIn", LinkedInSchema, "LinkedIn");
module.exports = LinkedIn;
