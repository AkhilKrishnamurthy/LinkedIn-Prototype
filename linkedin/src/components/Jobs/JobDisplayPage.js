import React, { Component } from "react";
import "../../static/css/JobDisplay.css";

import {connect} from 'react-redux';

class JobDisplayPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div className="cover-image-container">
                    <img src="https://wallpapercave.com/wp/0557mer.jpg" alt="cover-img" />
                </div>
                <div className="row ">
                    <div className="col-lg-1"></div>
                    <div className="content-container col-lg-8">
                        <div className="job-head-container border">
                            <div className="pad-left-5-pc mt-5 row">
                                <div className="job-display-img-container col-lg-2 col-md-2 col-sm-2">
                                    <img
                                        className="job-display-logo"
                                        src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc"
                                        alt="company-logo"
                                    />
                                </div>
                                <div className="job-display-title-container-content col-lg-7 col-md-7 col-sm-7">
                              
                                    <div><b>{this.props.jobResultsStateStore.result.jobTitle}</b></div>
                                    <div>{this.props.jobResultsStateStore.result.location}</div>
                                
                                <div className="mt-2"> 
                                    <button className="btn btn-lg save-btn">Save</button>
                                    <button className="btn btn-lg ml-3 easy-apply-btn">
                                        <span className="">
                                        <img
                                            className="apply-logo mr-2"
                                            src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png"
                                            alt="logo"
                                        />
                                        </span>
                                        <span><b>Easy apply</b></span>
                                    </button>
                                    <button className="btn btn-lg ml-3 apply-btn">Apply</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="job-desc-container mt-3 border">
                            <div className="job-desc-container-content mt-3 ml-4 mb-5">
                                {this.props.jobResultsStateStore.result.jobDescription}
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//
const mapStateToProps = state =>({
    jobResultsStateStore : state.jobResultsStateStore
});

//export default JobDisplayPage;
export default connect(mapStateToProps, {})(JobDisplayPage);