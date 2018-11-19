import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";

class JobsResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobData: [],
      jobDetails: ""
    };
  }

  componentDidMount() {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/jobs").then(response => {
      if (response.status === 200) {
        var jobResult = response.data;
        console.log("job data", jobResult);
        this.setState({
          jobData: jobResult,
          jobDetails: jobResult[0]
        });
      }
    });
  }

  toggleDetailsPane = (Parameter, event) =>{
      //const target = event.target;
        const index = Parameter;
        var jobDetail = this.state.jobData[index];
        
        console.log('job details', jobDetail);
        this.setState({
            jobDetails: jobDetail
        });
  }

  saveJobDetailstoStore = () =>{
    
  }


  render() {
    //left-pane content

    var briefPaneContent = this.state.jobData.map((job, index)=> {
      return (
        <div className="job-result-data p-3 mt-2 mb-2 row border" key={index}>
          <span className="job-logo-container col-lg-2">
            <img
              className="job-logo"
              src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc"
              alt="company-logo"
            />
          </span>
          <span className="col-lg-10">
            <div className="">
              <b>
                <Link to="#" onClick={this.toggleDetailsPane.bind(this, index)}>{job.jobTitle}</Link>
              </b>
              <br />
            </div>
            <div className="">
              <b>{job.companyName}</b>
            </div>
            <div>{job.location}</div>
          </span>
        </div>
      );
    });

    var detailsPaneContent = (
      <div className="mt-2 border">
        <div className="job-title-container pad-2-pc row">
          <div className="col-lg-3">
            <img
              className="job-details-logo"
              src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc"
              alt="company-logo"
            />
          </div>
          <div className="col-lg-9">
            <div className="">
              <b>
                <Link to="#">{this.state.jobDetails.jobTitle}</Link>
              </b>
              <br />
            </div>
            <div className="">
              <b>{this.state.jobDetails.companyName}</b>
            </div>
            <div>{this.state.jobDetails.location}</div>
            <div className="mt-2">
              <button className="btn btn-lg save-btn">Save</button>
              <button className="btn btn-lg ml-3 easy-apply-btn">
                <span className="apply-logo-container">
                  <img
                    className="apply-logo mr-2"
                    src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png"
                    alt="logo"
                  />
                </span>
                <span>Easy apply</span>
              </button>
              <button className="btn btn-lg ml-3 apply-btn">Apply</button>
            </div>
          </div>
        </div>
        <hr />

        <div className="pad-2-pc job-desc-cotainer">
          {this.state.jobDetails.jobDescription}
        </div>
      </div>
    );

    return (
      <div>
        <Header />

        <div>
          <div className="container jobs-result-filter-container">
            <span>
              <b>Jobs</b>
            </span>
            <span>
              <select className="custom-select">
                <option defaultValue>Date Posted</option>
                <option value="1">Past 24 hours</option>
                <option value="2">Past Week</option>
                <option value="3">Past Month</option>
                <option value="4">Any Time</option>
              </select>
            </span>
            <span>
              <select className="custom-select">
                <option defaultValue>LinkedIn Features</option>
                <option value="1">In your Network</option>
                <option value="2">Easy Apply</option>
                <option value="3">Under 10 Applicants</option>
              </select>
            </span>
            <span>
              <select className="custom-select">
                <option defaultValue>Company</option>
                <option value="1">Adobe</option>
                <option value="2">Google</option>
                <option value="3">Facebook</option>
              </select>
            </span>
            <span>
              <select className="custom-select">
                <option defaultValue>Experience Level</option>
                <option value="1">Internship</option>
                <option value="2">Entry Level</option>
                <option value="3">Associate</option>
              </select>
            </span>
          </div>
          <div className="row center-content">
            <div className="col-lg-1 col-md-1 col-sm-1" />
            <div className="ml-4 mt-5 jobs-result-container content-left-align col-lg-5 col-md-5 col-sm-5">
              <div>{briefPaneContent}</div>
            </div>
            <div className="mt-5 jobs-result-details-container content-left-align col-lg-5 col-md-5 col-sm-5">
              <div className="">{detailsPaneContent}</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default JobsResultsPage;
