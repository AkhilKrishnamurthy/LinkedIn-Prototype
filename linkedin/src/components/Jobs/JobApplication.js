import React, {Component} from 'react';
import Header from '../Header/Header';
import "../../static/css/JobApplication.css";

class JobApplication extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <div className="container">
                        <div className="form-container mt-5 border">
                            <div className="ml-5 mt-3 form-content">
                                <h3>Apply Job</h3>  
                                <hr/>
                                <div className="form-group">
                                    <input type="text" name="firstname" className="form-control form-control-lg" placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="lastname" className="form-control form-control-lg" placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control form-control-lg" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="country" className="form-control form-control-lg" placeholder="Country"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="address" className="form-control form-control-lg" placeholder="Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="city" className="form-control form-control-lg" placeholder="City"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="state" className="form-control form-control-lg" placeholder="State"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="zipcode" className="form-control form-control-lg" placeholder="Zip Code"/>
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
                                <div className="input-group form-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                    <div className="custom-file form-group">
                                        <input type="file" className="custom-file-input form-control form-control-lg" name="resume" id="inputGroupFile01"/>
                                        <label className="custom-file-label" For="inputGroupFile01">Choose file</label>
                                    </div>
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