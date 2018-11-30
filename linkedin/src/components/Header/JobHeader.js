import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../static/css/Navbar.css';
import {connect} from 'react-redux';
import {login} from '../../actions/LoginAction';
import {Redirect} from 'react-router';
import Header from '../Header/JobHeader';

class JobHeader extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
      let recruiterHeader = null;
      if(this.props && this.props.loginStateStore && this.props.loginStateStore.responseFlag) {
        if(this.props.loginStateStore.accountType=="2") {
          recruiterHeader = (
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-suitcase"></i></center><Link to= "/jobs/add-job">Post a Job</Link></a>
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
              <a className="nav-link" href="#"><center><i className="fas fa-home"></i></center><Link to="/home">Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-user-friends"></i></center><Link to="/my-network">My Network</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-briefcase"></i></center><Link to="/jobs">Jobs</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-envelope object-align-top"></i></center>Messaging</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-bell"></i></center>Notifications</a>
            </li>
            <li className="nav-item">
                         <ul class="nav navbar-nav">
                             <li class="dropdown">
           <a href="#" class="dropdown-toggle dropdownFontColor" data-toggle="dropdown">
           {/* <img src=""/> */}
           <img src = "" height="50" className="profileimage"/>
                         <br/>
           Me<span class="glyphicon glyphicon-user pull-right"></span></a>
           <ul class="dropdown-menu">
           <li><Link to= "/jobs/posting-details">Posted Jobs</Link><span class="glyphicon glyphicon-log-out pull-right"></span></li>
           <li><a>Profile<span class="glyphicon glyphicon-log-out pull-right"></span></a></li>
             <li class="divider"></li>
             <li><a onClick = {this.handleLogout}>Sign Out<span class="glyphicon glyphicon-log-out pull-right"></span></a></li>
           </ul>
         </li>
       </ul>
              {/* <a className="nav-link" href="#"><center><i className="fas fa-user"></i></center>Me</a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><center><i className="fas fa-th"></i></center>Work</a>
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
