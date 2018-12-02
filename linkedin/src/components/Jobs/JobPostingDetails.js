import React, {Component} from 'react';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import axios from "axios";
import {Redirect} from 'react-router';
import JobHeader from "../Header/JobHeader";
import {postedJobs} from '../../actions/jobPostingDetailsAction';
import { connect } from "react-redux";

class JobPostingDetails extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {  
        postedJobs: [],
        redirectToJobEditPage: false
        }
        this.handleApplyClick = this.handleApplyClick.bind(this);
    }

    handleApplyClick = (e) =>{
        const target = e.target;
        const id = target.id;

        // this.props.saveJobDetailsToStore(this.props.jobsLandingPageStateStore.result[id]);
        // this.setState({
        //     redirectToApplicationPage : true
        // });
    }

    async componentDidMount(){
    
        axios.get('http://localhost:3001/JobPostingHistory')
            .then(async (response) => {
                console.log(response);
                var arr = response.data.value;
                console.log(arr);
                this.setState({
                    postedJobs : this.state.postedJobs.concat(arr) 
                });   
        });
    }

    handleApplyClick = (e) =>{
        const target = e.target;
        const id = target.id;
        console.log("true");
        console.log(this.state.postedJobs[id]);
        this.props.postedJobs(this.state.postedJobs[id]);
        this.setState({
            redirectToJobEditPage : true
        });
    }

    render(){
        var redirectVar = null;

        if(this.state.redirectToJobEditPage === true){
            console.log("true")
            redirectVar  = <Redirect to="/jobs/edit-job-post"/>
        }
        if(!this.props.loginStateStore) {
            redirectVar = <Redirect to= "/recruiter-signup"/>
        }

        if(this.state.postedJobs.length>0) {
        console.log(this.state.postedJobs);
        }
        var savedJobsContent = this.state.postedJobs.map((job, index)=>{
            return(
                <div key={index}>
                    <div className="job-title"><b><Link to="#" id={index} onClick={this.handleClick}>{job.jobTitle}</Link></b></div>
                    <button className="btn btn-lg save-btn flt-right" id={index} onClick={this.handleApplyClick}>Edit</button>
                    <div className="">{job.companyName}</div>
                    <div className="">{job.employmentType}</div>
                    <hr/>
                </div>
            )
        });
      

        return(
            <div className="saved-jobs-main-container">
                <Header />
                {redirectVar}
                <div>
                <div className="row mt-5">
                    <div className="col-2"></div>
                    <div className="col-8 border content-container mt-3">
                        <div><h3>Posted Jobs</h3></div>
                        <hr/>
                        <div>
                            {savedJobsContent}
                        </div>                    
                    </div>
                </div>

                </div>
                
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { loginStateStore : state.Login.result }
    
};

//export default SavedJobs;
export default connect(mapStateToProps, {postedJobs})(JobPostingDetails);
// export default JobPostingDetails;