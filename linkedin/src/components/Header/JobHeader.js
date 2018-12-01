import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../static/css/Navbar.css';
import {connect} from 'react-redux';
import {login} from '../../actions/LoginAction';
import {Redirect} from 'react-router';
import Header from '../Header/JobHeader';
import profilePic from '../pp.jpg';

class JobHeader extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout = () => {
      window.location.reload();
  }

    render() {
      let recruiterHeader = null;
      if(this.props && this.props.loginStateStore && this.props.loginStateStore.responseFlag) {
        if(this.props.loginStateStore.accountType=="2") {
          recruiterHeader = (
            <li className="nav-item">
            <Link className="nav-link" to= "/jobs/add-job"><center><i className="fas fa-suitcase"></i></center>Post a Job</Link>
          </li>
          );
        }
    }
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
           <img src = {profilePic} className = "homeProfileImage" height="30" className="profileimage"/>
                         <br/>
           Me<span className="glyphicon glyphicon-user pull-right"></span></Link>
           <ul className="dropdown-menu">
           {/* <li><Link to= "/jobs/posting-details">Posted Jobs</Link><span className="glyphicon glyphicon-log-out pull-right"></span></li> */}
           <li><span className="glyphicon glyphicon-log-out"><Link to="/jobs/posting-details" className = "text-dark">Posted Jobs</Link></span></li>
           <li className = "dropdownFontColor"><span className="glyphicon glyphicon-log-out pull-right"><Link to="/profile" className = "text-dark">Profile</Link></span></li>
             <li className="divider"></li>
             <li><span className="glyphicon glyphicon-log-out"><Link to="/login" onClick = {this.handleLogout} className = "text-dark">Sign Out</Link></span></li>
           </ul>
         </li>
       </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><center><i className="fas fa-th"></i></center>Work</Link>
            </li>
            {recruiterHeader}
            {/* <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-suitcase"></i></center><Link to= "/jobs/add-job">Post a Job</Link></a>
            </li> */}
            
          </ul>
        </div>
      </nav>
      </div>
        );
    }
}
function mapStateToProps(state) {
  console.log("Login state update",state.Login.result);
  return { loginStateStore : state.Login.result };
}
export default connect(mapStateToProps, {})(JobHeader);
// export default JobHeader;
