import React, {Component} from 'react';
import Header from '../Header/Header';
import axios from 'axios';

class AddJobs extends Component{
    constructor(){
        super();
        this.state = {  
            companyName: "",
            jobTitle: "",
            industry: "",
            employmentType: "",
            location: "",
            seniorityLevel: "",
            jobDescription: "",
            companyPic: '',
            selectedFile: '',
            images: ''
        }
        this.companyNameChangeHandler = this.companyNameChangeHandler.bind(this);
        this.jobTitleChangeHandler = this.jobTitleChangeHandler.bind(this);
        this.industryChangeHandler = this.industryChangeHandler.bind(this);
        this.employmentTypeChangeHandler = this.employmentTypeChangeHandler.bind(this);
        this.locationChangeHandler = this.locationChangeHandler.bind(this);
        this.seniorityLevelChangeHandler = this.seniorityLevelChangeHandler.bind(this);
        this.jobDescriptionChangeHandler = this.jobDescriptionChangeHandler.bind(this);
        this.submitJobDetails = this.submitJobDetails.bind(this);
    }
    companyNameChangeHandler = (e) => { this.setState({ companyName : e.target.value }) }
    jobTitleChangeHandler = (e) => { this.setState({ jobTitle : e.target.value }) }
    industryChangeHandler = (e) => { this.setState({ industry : e.target.value }) }
    employmentTypeChangeHandler = (e) => { this.setState({ employmentType : e.target.value }) }
    locationChangeHandler = (e) => { this.setState({ location : e.target.value }) }
    seniorityLevelChangeHandler = (e) => { this.setState({ seniorityLevel : e.target.value }) }
    jobDescriptionChangeHandler = (e) => { this.setState({ jobDescription : e.target.value }) }

    onChange = (e) => {
        if(e.target.name == 'selectedFile'){
            console.log(e.target.files);
              this.setState({
            selectedFile: e.target.files[0]
          })
        }else{
          this.setState({ [e.target.name]: e.target.value });
        }
    }

    async submitJobDetails(event) {
        event.preventDefault();
        const { selectedFile } = this.state;
        let formData = new FormData();
        formData.append('selectedFile', selectedFile);
        console.log("selectedFile file",this.state.selectedFile);
       
        console.log("image file",formData);
        await axios.post('http://localhost:3001/upload_file', formData)
        .then(async (result) => {
          // access results...
        });
        console.log(this.state.selectedFile.name);
        var img =  this.state.selectedFile.name
       
        console.log("image file",formData);
        const data = {
            companyName: this.state.companyName,
            jobTitle: this.state.jobTitle,
            industry: this.state.industry,
            employmentType: this.state.employmentType,
            location: this.state.location,
            seniorityLevel: this.state.seniorityLevel,
            jobDescription: this.state.jobDescription,
            images: img
        }
        axios.defaults.withCredentials = true;   
        axios.
        post("http://localhost:3001/submitJobDetails", data)
            .then(async (response) => {
                if(response.status === 200){
               
                }else{
                }
            });
    }

    render(){
        return(
            <div>
            <Header/>
            <div className = "post-job-container">
            <div class="job details col-lg-6 border post-job-border">
            <p>Company Name</p>
            <input onChange = {this.companyNameChangeHandler} type="text" className="form-control col-xs-3" name="companyName" placeholder="Company Name"/>
            <br/>
            <p>Job Title</p>
            <input onChange = {this.jobTitleChangeHandler} type="text" className="form-control col-xs-3" name="jobTitle" placeholder="Job Title"/>
            <p>Industry</p>
            <input onChange = {this.industryChangeHandler} type="text" className="form-control col-xs-3" name="industry" placeholder="Industry"/>
            <p>Employment Type</p>
            <input onChange = {this.employmentTypeChangeHandler} type="text" className="form-control col-xs-3" name="employmentType" placeholder="Employment Type"/>
            <p>Location</p>
            <input onChange = {this.locationChangeHandler} type="text" className="form-control col-xs-3" name="location" placeholder="location"/>
            <p>Seniority Level</p>
            <input onChange = {this.seniorityLevelChangeHandler} type="text" className="form-control col-xs-3" name="seniorityLevel" placeholder="Seniority Level"/>
            <p>Job Description</p>
            <input onChange = {this.jobDescriptionChangeHandler} type="text" className="form-control col-xs-3 jobPostingDescriptionInbutBox" name="jobDescription" placeholder="Job Description"/>
            </div>
            <div class="company_pic">
                {/* <img src = "" height="50" className="companyimage"/> */}
                <input  type="file" name="selectedFile" onChange={this.onChange} multiple/>
            </div>
            <button className="btn btn-primary" onClick = {this.submitJobDetails}>Submit</button>
            </div>
        </div>
        );
    }
}

export default AddJobs;