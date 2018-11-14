import React, { Component } from "react";
import { Link } from "react-router-dom";
import JobHeader from "../Header/JobHeader";
import "./JobsLanding.css";

class JobLandingPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

    render(){
        return(
            <div>
                <JobHeader />

                    <div className="row">
                      <div className="jobs-landing-header-container">
                          <div className="jobs-landing-search-container pull-center-1 col-lg-6 col-md-6 col-sm-6">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Search Jobs"
                            />
                          </div>

                        <div className="jobs-landing-search-container pull-center-2 col-lg-6 col-md-6 col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search Location"
                          />
                        </div>
                      </div>
                   </div>


                  <div className="row">
                      <div className="jobs-search-alerts-container pull-center-1 col t-09 t-normal t-white nav-links">
                        Job search alerts:
                      </div>

                      <div className="jobs-search-alerts-container col-3 t-09 t-normal t-white nav-links">
                        <b>
                          <Link to="#">8 new jobs</Link>
                        </b>{" "}
                        for Software Engineer in San Jose, CA
                      </div>

                      <div className="jobs-search-alerts-container col-4 t-09 t-normal t-white nav-links">
                        <b>
                          <Link to="#">1 new job</Link>
                        </b>{" "}
                        for Software Development Engineer in San Jose, CA
                      </div>

                      <div className="jobs-search-alerts-container pull-center-2 col t-09 t-normal t-white nav-links">
                        <b>
                          <Link to="#">Manage alerts</Link>
                        </b>
                      </div>
                   </div>

                  <div className="row mt-3 pull-center-1 pull-center-2">
                            
                            <div className="jobs-landing-bar-container ">
                            <span className="pad-1-pc">5 Saved Jobs</span>
                            <span className="pad-1-pc">10 Applied Jobs</span>
                            <span className="pad-3-pc">Career Interests</span>
                            <span className="pad-6-pc">LinkedIn Salary</span>
                            <span className="pad-3-pc">Looking for talent?</span>
                            <span className="pad-3-pc"><button class="btn linkedin-post-job" type="submit">Post a Job</button></span>
                            

                    </div>

                          
                </div>
                    
                    {/*Testing*/}
                    {/* <div className="jobs-landing-main-padding"> */}
                    <div className = "container jobs-landing-wrapper-div  ">
                            <div className="container content-left-align view-jobs-blocks-container col-lg-10 col-md-10 col-sm-10 mt-5">
                                    <div>
                                    <p><b>Jobs you may be interested in</b></p>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content jobs-adjust-spacing t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>
                                            </div>
                                        </div>
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>                              
                                            </div>
                                        </div>
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>                              
                                            </div>
                                        </div>
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>                     
                                            </div>
                                        </div>
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>                     
                                            </div>
                                        </div>
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>                     
                                            </div>
                                        </div>
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>                     
                                            </div>
                                        </div>
                                        <div className="col-3 pad-1-pc border">
                                            <div className="pad-1-pc center-content t-09">
                                                <img className="jobs-landing-img" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="logo" />
                                                <p><b>Software Engineer</b></p>
                                                <p>Snowflake Computing</p>
                                                <p>San Mateo, CA, USA</p>                     
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                    
            </div>
         
      // </div>
    );
  }
}

export default JobLandingPage;
