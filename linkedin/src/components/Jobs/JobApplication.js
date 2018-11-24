import React, {Component} from 'react';
import Header from '../Header/Header';
import "../../static/css/JobApplication.css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class JobApplication extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            applicationSubmitted : false
        };

        //bind
        this.handleChange = this.handleChange.bind(this);
        this.submitApplication = this.submitApplication.bind(this);
    }

    handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value
        });
    }
    
    submitApplication = () =>{

        axios.post('/apply-job')
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
                                    <input type="radio" name="yes" className="form-check-input"/>Yes</label>
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
                                        <label className="custom-file-label" For="inputGroupFile01">Choose file</label>
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

export default JobApplication;