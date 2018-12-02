import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import "../../static/css/SavedJobs.css";
import {Link} from 'react-router-dom';

class AppliedJobs extends Component{
    render(){

        var appliedJobsContent = this.props.jobsLandingPageStateStore.appliedJobs.map(function(job, index){
            return(
                <div key={index}>
                    <div className="job-title"><b><Link to="#" id={index}>{job.jobTitle}</Link></b></div>
                    <button className="btn btn-lg save-btn flt-right" id={index}>Delete</button>
                    <div className="">{job.companyName}</div>
                    <div className="">{job.location}</div>
                    <hr/>
                </div>
            )
        });


        return(
            <div className="saved-jobs-main-container">
                <Header/>
                <div>
                <div className="row mt-5">
                    <div className="col-2"></div>
                    <div className="col-8 border content-container mt-3">
                        <div><h3>Applied Jobs</h3></div>
                        <hr/>
                        <div>
                            {appliedJobsContent}
                        </div>                    
                    </div>
                </div>

                </div>
                
            </div>
        )
    }
}

//mapStateToProps
const mapStateToProps = state =>({
    jobsLandingPageStateStore : state.jobsLandingPageStateStore
});

export default connect(mapStateToProps)(AppliedJobs);