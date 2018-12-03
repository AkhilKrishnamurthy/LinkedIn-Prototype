import React, { Component } from "react";
import JobHeader from "../Header/JobHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert'
import {saveJobDetailsToStore} from '../../actions/jobResultsAction';
import {saveSearchFieldToStore} from '../../actions/jobSearchAction';
import '../../static/css/JobResultsPage.css';
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";

class JobsResultsPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const MAX_LENGTH = 250;
    this.state = {
      jobData: [],
      jobDetails: "",
      redirectToJobDisplayPage: false,
      saveClicked: false,
      redirectToJobApplication:false,
      companyNameSearchFilter: '',
      experienceLevelSearchFilter: '',
      IndustrySearchFilter: '',
      employmentTypeSearchFilter: '',
      easyApplySearchFilter: '',
      currentPage: 1,
      pageSize: 3
    };

    //bind
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }
  handlePageChange = page => {
    this.setState({ currentPage : page });
}

  componentDidMount() {
    axios.defaults.withCredentials = true;
    var values = {
      jobTitle :  this.props.searchFieldToStore.searchfieldresult.jobTitle,
      location : this.props.searchFieldToStore.searchfieldresult.location
  }

  console.log("values" + values.jobTitle + values.location)
  
    axios.post("http://localhost:3001/jobsearch",values).then(response => {
      if (response.status === 200) {
        var jobResult = response.data;
        console.log("job data", jobResult);
        if(jobResult.length === 0)
        {
          swal("No data found","Please recheck your search criteria","warning")
        }
        else{
        this.setState({
          jobData: jobResult,
          jobDetails: jobResult[0]
        });
      }
        console.log("jobData length" + this.state.jobData.length)
      }     
    });
  }

  toggleDetailsPane = (Parameter, event) =>{
      //const target = event.target;
        // const index = Parameter;
        const index = ((this.state.currentPage-1)*this.state.pageSize)+parseInt(Parameter);;
        var jobDetail = this.state.jobData[index];
        
        console.log('job details', jobDetail);
        this.setState({
            jobDetails: jobDetail
        });
  }

  saveJobDetailsToStore = () =>{
    console.log('Inside saveJobDetailstoStore');
    this.props.saveJobDetailsToStore(this.state.jobDetails);
    this.setState({
      redirectToJobDisplayPage : true
    });
  }

  handleSaveClick = () =>{
    console.log('Job details',this.state.jobDetails);
    if(this.state.saveClicked === false){
      var data = {
        jobDetails : this.state.jobDetails
      };

      axios.post('http://localhost:3001/save-job', data)
      .then((response) =>{
        if(response.status === 200){
          this.setState({
            saveClicked: true
          });
        }
      });
    }
    
  }

  handleApplyJob = ()=>{
    this.saveJobDetailsToStore();
    this.setState({
      redirectToJobApplication: true
    });
  }

  handleEasyApply = ()=>{
    this.saveJobDetailsToStore();
    this.setState({
      redirectToJobApplication: true
    });
  }

  updateCompanySearch(event) {
    this.setState({companyNameSearchFilter: event.target.value.substr(0,20)});
}
updateExperienceLevelSearch(event) {
  this.setState({experienceLevelSearchFilter: event.target.value.substr(0,20)});
}
updateIndustrySearch(event) {
  this.setState({IndustrySearchFilter: event.target.value.substr(0,20)});
}
updateEmploymentTypeSearch(event) {
  this.setState({employmentTypeSearchFilter: event.target.value.substr(0,20)});
}
updateEasyApplySearch(event) {
  this.setState({easyApplySearchFilter: event.target.value.substr(0,20)});
}





  render() {
    //left-pane content
    var redirectVar = null;
    if(this.state.redirectToJobDisplayPage === true){
      redirectVar = <Redirect to="/jobs/display"/>
    }

    if(this.state.redirectToJobApplication === true){
      redirectVar = <Redirect to="/jobs/apply-job"/>
    }

    const {length : count} = this.state.jobData
    const { pageSize, currentPage } = this.state;

    let filteredProperties = this.state.jobData
    .filter(
        (job) => {
            console.log(this.state.jobData);
           return job.companyName.indexOf(this.state.companyNameSearchFilter) !== -1 
           && job.seniorityLevel.indexOf(this.state.experienceLevelSearchFilter) !== -1
           && job.industry.indexOf(this.state.IndustrySearchFilter) !== -1
           && job.employmentType.indexOf(this.state.employmentTypeSearchFilter) !== -1
           && job.easyApply.indexOf(this.state.easyApplySearchFilter) !== -1;
        //    && properties.availableStartingDate>=this.state.fromDate;
        });

        const movies = paginate(filteredProperties, currentPage, pageSize)

    var briefPaneContent = movies.map((job, index)=> {
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
            <small className="text-muted"><p className = "overflow-ellipsis">{job.jobDescription}</p></small>
            <small className="text-muted">{job.postedDate}</small>
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
                <Link to="#" onClick={this.saveJobDetailsToStore}>{this.state.jobDetails.jobTitle}</Link>
              </b>
              <br />
            </div>
            <div className="">
              <b>{this.state.jobDetails.companyName}</b>
            </div>
            <div>{this.state.jobDetails.location}</div>
            <div className="mt-2">
              <button className="btn btn-lg save-btn" onClick={this.handleSaveClick}>Save</button>
              <button className="btn btn-lg ml-3 easy-apply-btn" onClick={this.handleEasyApply}>
                <span className="apply-logo-container">
                  <img
                    className="apply-logo mr-2"
                    src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png"
                    alt="logo"
                  />
                </span>
                <span>Easy apply</span>
              </button>
              <button className="btn btn-lg ml-3 apply-btn" onClick={this.handleApplyJob}>Apply</button>
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
        {redirectVar}
        <JobHeader />

        <div>
          <div className="container jobs-result-filter-container">
            {/* <span> */}
              {/* <b>Jobs</b> */}
            {/* </span> */}
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
              <select value = {this.state.easyApplySearchFilter} onChange={this.updateEasyApplySearch.bind(this)} className="custom-select">
                <option value="">Easy Apply</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              </span>

            <span>
            <input type = "text" value = {this.state.companyNameSearchFilter} onChange={this.updateCompanySearch.bind(this)} placeholder = "Filter by Company Name" className="custom-search"/>
            </span>

            <span>
            <input type = "text" value = {this.state.IndustrySearchFilter} onChange={this.updateIndustrySearch.bind(this)} placeholder = "Filter by Industry" className="custom-search"/>
            </span>

            <span>
              <select value = {this.state.experienceLevelSearchFilter} onChange={this.updateExperienceLevelSearch.bind(this)} className="custom-select">
                <option value="">Experience Level</option>
                <option value="Internship">Internship</option>
                <option value="Entry-level">Entry-level</option>
                <option value="Mid-Senior level">Mid-Senior level</option>
                <option value="Director">Director</option>
                <option value="Associate">Associate</option>
                <option value="Not Applicable">Not Applicable</option>
              </select>
            </span>

            <span>
              <select value = {this.state.employmentTypeSearchFilter} onChange={this.updateEmploymentTypeSearch.bind(this)} className="custom-select">
                <option value="">Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Internship">Internship</option>
              </select>
            </span>

          </div>
          <div className="row center-content">
            <div className="col-lg-1 col-md-1 col-sm-1" />
            <div className="ml-4 mt-5 jobs-result-container content-left-align col-lg-5 col-md-5 col-sm-5">
              <div>{briefPaneContent}</div>
              <div>
                        <Pagination itemsCount={count} pageSize={pageSize} 
                        currentPage = {this.state.currentPage}
                        onPageChange={this.handlePageChange} /> 
                </div>
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
//mapStateToProps

const mapStateToProps  = state =>({
  jobResultsStateStore : state.jobResultsStateStore,
  searchFieldToStore : state.jobSearchFieldsStateStore
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveSearchFieldToStore, saveJobDetailsToStore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsResultsPage);