import React, {Component} from 'react';
import Header from '../Header/Header';
import "../../static/css/JobApplication.css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class JobApplication extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            applicationSubmitted : false,
            isApplicationHalfFilled : false,
            isApplicationViewed: true
        };

        //bind
        this.handleChange = this.handleChange.bind(this);
        this.submitApplication = this.submitApplication.bind(this);
    }

    componentDidMount(){
        this.applicationViewed();
    }

    applicationViewed = () => {
        axios.post()
            .then((response)=>{
                if(response.status === 200){
                    console.log('application view log saved!');
                }
            })
    }

    handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        if(name == "resume"){

            var resume = target.files[0];
            var data = new FormData();
            data.append('resume', resume);
            console.log('Resume uploaded!');
            axios.defaults.withCredentials=true;
            axios.post('http://localhost:3001/upload_file', data)
                .then((response)=>{
                    if(response.status === 200){
                        console.log('Resume data', resume.name);
                        this.setState({
                            resume : resume.name,
                            isApplicationHalfFilled: true
                        });
                    }
                });
        }
        else{
            this.setState({
                [name] : value,
                isApplicationHalfFilled: true
            });
        }

        
    }
    
    submitApplication = () =>{


        var data = {
            applicationData : {
                firstname : this.state.firstname,
                lastname : this.state.lastname,
                email : this.state.email,
                country : this.state.country,
                address : this.state.address,
                city : this.state.city,
                state : this.state.state,
                zipcode : this.state.zipcode,
                resume : this.state.resume
            }, 
            jobId : this.props.jobResultsStateStore.result.jobId,
            jobData : this.props.jobResultsStateStore.result
            
        }
        axios.defaults.withCredentials=true;
        axios.post('http://localhost:3001/apply-job', data)
            .then((response)=>{
                if(response.status === 200){
                    this.setState({
                        applicationSubmitted: true
                    });
                }
            });
        
    }
    
    render(){

        var redirectVar = null;
        if(this.state.applicationSubmitted === true){
            redirectVar  = <Redirect to="/"/>
        }
        return(
            <div>
                {redirectVar}
                <Header/>
                <div>
                    <div className="container">
                        <div className="form-container mt-5 border">
                            <div className="ml-5 mt-3 form-content">
                                <h3>Apply Job</h3>  
                                <hr/>
                                <div className="form-group">
                                    <input type="text" name="firstname" className="form-control form-control-lg" onChange={this.handleChange} required placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="lastname" className="form-control form-control-lg" onChange={this.handleChange} required placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control form-control-lg" placeholder="Email" onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="country" className="form-control form-control-lg" placeholder="Country" onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="address" className="form-control form-control-lg" placeholder="Address" onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="city" className="form-control form-control-lg" placeholder="City" onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="state" className="form-control form-control-lg" placeholder="State" onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="zipcode" className="form-control form-control-lg" placeholder="Zip Code" onChange={this.handleChange} required/>
                                </div>
                                <div> Will you now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)? </div>
                                <div className="form-group form-check">
                                    <label className="form-check-label">
                                    <input type="radio" name="yes" className="form-check-input" />Yes</label>
                                </div>
                                <div className="form-group form-check">
                                    <label className="form-check-label">
                                    <input type="radio" name="no" className="form-check-input form-control-lg" placeholder="Email"/>No</label>
                                </div>
                                <div className="input-group form-group mb-3 file-container">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                    <div className="custom-file form-group">
                                        <input type="file" className="custom-file-input form-control form-control-lg" name="resume" id="inputGroupFile01" onChange={this.handleChange} required/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button name="apply" className="col-3 btn btn-lg form-control form-control-md apply-job-btn" onClick={this.submitApplication}>Submit</button>
                                </div>
                            </div>
                        </div>                            
                    </div>    
                </div>
            </div>
        )
    }
}
//mapstatetoProps
const mapStateToProps  = state =>({
    jobResultsStateStore : state.jobResultsStateStore
  });

export default connect(mapStateToProps)(JobApplication);