import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../static/css/Navbar.css'

class JobHeader extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
          <div className = "job-header-main-div">
          <nav className="navbar navbar-expand-md jobheader">
          <div className = "job-header-logo-holder">
           <img className="img-container linkedIn-logo" src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png" alt="logo"></img>
          </div>

        <div className="collapse navbar-collapse navbar-right nav-links" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"> 
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-home"></i></center>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-user-friends"></i></center>My Network</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-briefcase"></i></center>Jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-envelope object-align-top"></i></center>Messaging</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-bell"></i></center>Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-user"></i></center>Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-th"></i></center>Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-suitcase"></i></center>Post a Job</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
        );
    }
}
export default JobHeader;