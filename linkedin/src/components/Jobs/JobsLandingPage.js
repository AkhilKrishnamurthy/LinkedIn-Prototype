import React, { Component } from "react";
import { Link } from "react-router-dom";
import JobHeader from "../Header/JobHeader";
import "./JobsLanding.css";

class JobLandingPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
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

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  4 saved jobs <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  10 applied jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Career interests
                </a>
              </li>
            </ul>
            <Link to="/salary">LinkedIn Salary</Link>
            Looking for Talent?
            <button class="btn linkedin-post-job my-2 my-sm-0" type="submit">
              Post a Job
            </button>
          </div>
        </nav>

        {/*Testing*/}
        <div className="container content-left-align view-jobs-blocks-container col-lg-10 col-md-10 col-sm-10 mt-5">
          <div>
            <p>
              <b>Jobs you may be interested in</b>
            </p>
          </div>

          <div className="row">
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content jobs-adjust-spacing t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
            <div className="col-3 pad-1-pc border">
              <div className="pad-1-pc center-content t-09">
                <img
                  className="jobs-landing-img"
                  src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U"
                  alt="logo"
                />
                <p>
                  <b>Software Engineer</b>
                </p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobLandingPage;
