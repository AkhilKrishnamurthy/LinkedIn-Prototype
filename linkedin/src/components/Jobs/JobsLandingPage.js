import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {saveSearchFieldToStore} from '../../actions/jobSearchAction';
import JobHeader from "../Header/JobHeader";
import "./JobsLanding.css";

import {saveSavedJobsToStore, saveAppliedobsToStore} from '../../actions/jobsLandingPageAction';

class JobsLandingPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    this.state = {
        redirectToJobResultsPage: false,
        savedJobsCount:0,
        appliedJobsCount: 0
    }

    //bind
    this.searchResultsHandler = this.searchResultsHandler.bind(this);
    this.handleJobTitle = this.handleJobTitle.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.getSavedJobs = this.getSavedJobs.bind(this);
  }

  componentDidMount(){
    this.getSavedJobs();
    this.getAppliedJobs();
  }

  getSavedJobs = ()=>{
    axios.defaults.withCredentials=true;
    axios.get('http://localhost:3001/saved-jobs')
            .then((response)=>{
                if(response.status === 200){
                    console.log('saved jobs: ', response.data);
                    console.log('saved jobs count', response.data.length);
                    this.setState({
                        savedJobs: response.data,
                        savedJobsCount: response.data.length
                    });
                }
    });
  }

  getAppliedJobs = ()=>{
    axios.defaults.withCredentials=true;
    axios.get('http://localhost:3001/getAppliedJobs')
      .then((response)=>{
        if(response.status === 200){
          console.log('Response applied jobs', response.data);
          this.setState({
            appliedJobs: response.data,
            appliedJobsCount : response.data.length
          });
        }
      })
  }

  searchResultsHandler = (e) => {
    var data = {
        jobTitle : this.state.jobTitle,
        location : this.state.location
    }
    console.log("Inside search results")

    this.props.saveSearchFieldToStore(data);
    this.setState({
        redirectToJobResultsPage : true
      });
       
}

    handleJobTitle = (e) => {
        this.setState({
            jobTitle : e.target.value
        })
    }

    handleLocation = (e) => {
        this.setState({
            location : e.target.value
        })
    }

    render(){
        var redirectVar = null;
        console.log(this.state.redirectToJobResultsPage)
        if(this.state.redirectToJobResultsPage == true){
          redirectVar = <Redirect to="/jobs/results"/>
        }

        if(this.state.savedJobs != null){
          this.props.saveSavedJobsToStore(this.state.savedJobs);
        }

        if(this.state.appliedJobs != null){
          this.props.saveAppliedobsToStore(this.state.appliedJobs);
        }



        return(
            <div>
                {redirectVar}
                <JobHeader />
                      <div className="jobs-landing-header-container pad-top-1-pc">
                        <form>
                            <input type = "text" onChange = {this.handleJobTitle} className = "jobs" placeholder = "Search Jobs"></input>
                            &nbsp;&nbsp;
                            
                            <input type = "text" onChange = {this.handleLocation} className = "location" placeholder = "Search Location"></input>
                            &nbsp;&nbsp;
                            <button onClick={this.searchResultsHandler} className="btn btn-outline-default white-outline btn-md searchbox-submit" type="button">
                            Search
                            </button>
                      </form>
                   </div>

                  <div className="row">
                      <div className="jobs-search-alerts-container pull-center-1 col t-09 t-normal t-white nav-links">
                        Job search alerts:
                      </div>

                      <div className="jobs-search-alerts-container col-3 t-09 t-normal t-white nav-links">
                        <b>
                          <Link to="#">8 new jobs</Link>
                        </b>
                        for Software Engineer in San Jose, CA
                      </div>

                      <div className="jobs-search-alerts-container col-4 t-09 t-normal t-white nav-links">
                        <b>
                          <Link to="#">1 new job</Link>
                        </b>
                        for Software Development Engineer in San Jose, CA
                      </div>

                      <div className="jobs-search-alerts-container pull-center-2 col t-09 t-normal t-white nav-links">
                        <b>
                          <Link to="#">Manage alerts</Link>
                        </b>
                      </div>
                   </div>

                   <div className = "jobs-landing-main-bg">

                        <div className="row mt-3 pull-center-1 pull-center-2">
                                    
                            <div className="jobs-landing-bar-container ">
                                    <span className="pad-1-pc"><Link to="/jobs/saved-jobs">{this.state.savedJobsCount}  Saved Jobs</Link></span>
                                    <span className="pad-1-pc"><Link to="/jobs/applied-jobs">{this.state.appliedJobsCount} Applied Jobs</Link></span>
                                    <span className="pad-3-pc">Career Interests</span>
                                    <span className="pad-6-pc">LinkedIn Salary</span>
                                    <span className="pad-3-pc">Looking for talent?</span>
                                    <span className="pad-3-pc"><button class="btn linkedin-post-job" type="submit">Post a Job</button></span>
                                    

                            </div>                
                        </div>

        <div class="album py-5 bg-light">
        <div class="container">

        <div>
            <p><b>Jobs you may be interested in</b></p>
        </div>

          <div class="row">
          <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

        
                    
            </div>

            </div>
         
      // </div>
    );
  }
}

//mapStateToProps

const mapStateToProps  = state =>({
    saveSearchFieldToStore : state.jobSearchFieldsStateStore
  });
  
  
//export default JobsLandingPage;
export default connect(mapStateToProps, {saveSearchFieldToStore, saveSavedJobsToStore, saveAppliedobsToStore})(JobsLandingPage);
