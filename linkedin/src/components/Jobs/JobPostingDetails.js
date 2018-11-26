import React, {Component} from 'react';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import axios from "axios";
import {Redirect} from 'react-router';
import JobHeader from "../Header/JobHeader";

class JobPostingDetails extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {  
        postedJobs: []
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
            // var arr = response.data;
    //         for(var i=0;i<arr.length;i++) {
    //         var images = arr[i].imageFiles;
    //         var match = images.split(',');
    //         var joined = [];
    //         joined.length = 0;
    //     arr[i].imageFiles = images;
    //     console.log(arr);
        
    // }
    // this.setState({
    //     property : this.state.property.concat(arr) 
    // });     
        });
    }

    render(){
        if(this.state.postedJobs.length>0) {
        console.log(this.state.postedJobs);
        }
        var redirectVar = null;
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

export default JobPostingDetails;