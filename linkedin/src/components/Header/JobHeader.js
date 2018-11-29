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
              <Link className="nav-link" to="/home"><center><i className="fas fa-home"></i></center>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-network"><center><i className="fas fa-user-friends"></i></center>My Network</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs"><center><i className="fas fa-briefcase"></i></center>Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><center><i className="fas fa-envelope object-align-top"></i></center>Messaging</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><center><i className="fas fa-bell"></i></center>Notifications</Link>
            </li>
            <li className="nav-item">
                         <ul className="nav navbar-nav">
                             <li className="dropdown">
           <Link to="#" className="dropdown-toggle dropdownFontColor" data-toggle="dropdown">
           {/* <img src=""/> */}
           <img src = "" height="50" className="profileimage"/>
                         <br/>
           Me<span className="glyphicon glyphicon-user pull-right"></span></Link>
           <ul className="dropdown-menu">
           <li><Link to= "/jobs/posting-details">Posted Jobs</Link><span className="glyphicon glyphicon-log-out pull-right"></span></li>
           <li><a>Profile<span className="glyphicon glyphicon-log-out pull-right"></span></a></li>
             <li className="divider"></li>
             <li><Link onClick = {this.handleLogout} to="#">Sign Out<span className="glyphicon glyphicon-log-out pull-right"></span></Link></li>
           </ul>
         </li>
       </ul>
              {/* <a className="nav-link" href="#"><center><i className="fas fa-user"></i></center>Me</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><center><i className="fas fa-th"></i></center>Work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to= "/jobs/add-job"><center><i className="fas fa-suitcase"></i></center>Post a Job</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
        );
    }
}
export default JobHeader;