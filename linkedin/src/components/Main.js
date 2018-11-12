import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import RecruiterSignup from './Signup/RecruiterSignup';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import MyNetwork from './MyNetwork/MyNetwork';
import AnalysticsDashboardLandingPage  from './AnalyticsDashboard/LandingPage';
import AddJobs from './Jobs/AddJob';
import ApplicationInfo from './Jobs/ApplicationInfo';
import JobDisplayPage from './Jobs/JobDisplayPage';
import JobPostingDetails from './Jobs/JobPostingDetails';
import JobPostings from './Jobs/JobPostings';
import JobsLandingPage from './Jobs/JobsLandingPage';
import JobsResultsPage from './Jobs/JobsResultsPage';

class Main extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/recruiter-signup" component={RecruiterSignup}/>
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile}/>
                <Route path="/my-network" component={MyNetwork}/>
                <Route path="/analytics-dashboard" component={AnalysticsDashboardLandingPage}/>
                <Route path="/jobs/add-job" component={AddJobs}/>
                <Route path="/jobs/app-info" component={ApplicationInfo}/>
                <Route path="/jobs/display" component={JobDisplayPage}/>
                <Route path="/jobs/posting-details" component={JobPostingDetails}/>
                <Route path="/jobs/postings" component={JobPostings}/>
                <Route exact path="/jobs" component={JobsLandingPage}/>
                <Route path="/jobs/results" component={JobsResultsPage}/>
            </div>

        );
    }
}

export default Main;