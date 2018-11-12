import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

class JobsResultsPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Header />

                <div>
                    <div className="container jobs-result-filter-container">
                        <span><b>Jobs</b></span>
                        <span>
                            <select className="custom-select">
                                <option defaultValue>Date Posted</option>
                                <option value="1">Past 24 hours</option>
                                <option value="2">Past Week</option>
                                <option value="3">Past Month</option>
                                <option value="4">Any Time</option>
                            </select>
                        </span>
                        <span>
                            <select className="custom-select">
                                <option defaultValue>LinkedIn Features</option>
                                <option value="1">In your Network</option>
                                <option value="2">Easy Apply</option>
                                <option value="3">Under 10 Applicants</option>
                            </select>
                        </span>
                        <span>
                            <select className="custom-select">
                                <option defaultValue>Company</option>
                                <option value="1">Adobe</option>
                                <option value="2">Google</option>
                                <option value="3">Facebook</option>
                            </select>
                        </span>
                        <span>
                            <select className="custom-select">
                                <option defaultValue>Experience Level</option>
                                <option value="1">Internship</option>
                                <option value="2">Entry Level</option>
                                <option value="3">Associate</option>
                            </select>
                        </span>
                    </div>
                    <div className="row center-content">
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="ml-4 mt-5 jobs-result-container content-left-align col-lg-5 col-md-5 col-sm-5">
                            <div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                    <span className="job-logo-container col-lg-2">
                                        <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </span>
                                    <span className="col-lg-10">
                                        <div className=""><b><Link to="#">Computer Scientist - Adobe Cloud Platform</Link></b><br /></div>
                                        <div className=""><b>Adobe</b></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                    </span>
                                </div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                    <span className="job-logo-container col-lg-2">
                                        <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </span>
                                    <span className="col-lg-10">
                                        <div className=""><b><Link to="#">Computer Scientist - Adobe Cloud Platform</Link></b><br /></div>
                                        <div className=""><b>Adobe</b></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                    </span>
                                </div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                    <span className="job-logo-container col-lg-2">
                                        <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </span>
                                    <span className="col-lg-10">
                                        <div className=""><b><Link to="#">Computer Scientist - Adobe Cloud Platform</Link></b><br /></div>
                                        <div className=""><b>Adobe</b></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                    </span>
                                </div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                    <span className="job-logo-container col-lg-2">
                                        <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </span>
                                    <span className="col-lg-10">
                                        <div className=""><b><Link to="#">Computer Scientist - Adobe Cloud Platform</Link></b><br /></div>
                                        <div className=""><b>Adobe</b></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 jobs-result-details-container content-left-align col-lg-5 col-md-5 col-sm-5">
                        <div className="">
                        
                            <div className="mt-2 border">
                                <div className="job-title-container pad-2-pc row">
                                    <div className="col-lg-3">
                                        <img className="job-details-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="">
                                            <b><Link to="#">Computer Scientist - Adobe Cloud Platform</Link></b><br />
                                        </div>
                                        <div className="">
                                            <b>Adobe</b>
                                        </div>                                        
                                        <div>345 Park Avenue, San Jose, CA 95110-2704, US</div>
                                        <div className="mt-2">
                                            <button className="btn btn-lg save-btn">Save</button>
                                            <button className="btn btn-lg ml-3 apply-btn">Apply</button>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                
                                <div className="pad-2-pc job-desc-cotainer">
                                Job description
                                The Challenge
                                
                                Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. We are starting with foundational elements such as Identity, Profile, Segmentation, and edge components for real-time data capture and decisioning, and lay the foundation for higher-level services required for our Experience Business vision. We will run and maintain high traffic, high visibility applications with immense amounts of data and solve challenging scaling problems. For this role we require the ability to
                                Selecting and integrating any Big Data tools and frameworks required to provide requested capabilities
                                Build and develop critical parts of the services and deliver to production
                                Track record for proven ability to be a self-starter
                                Ability to articulate the choice towards a correct tool, technology.
                                Proven ability to work well in a high performing team
                                Translate high level requirements to actionable tasks/deliverables
                                
                                What You Need To Succeed
                                Open source technologies – Spark, Hadoop Stack, Kafka
                                Experience with Cloudera/MapR/Hortonworks
                                Well versed with distributed computing principles
                                Proven record of delivering highly optimized code
                                Proven experience with NoSQL databases, such as HBase, Cassandra, MongoDB
                                Proficiency in data structures and algorithms
                                Cost consciousness around public cloud infrastructure
                                DevOps knowledge a plus
                                
                                2+ years of experience required
                                
                                Needs: Masters in Computer Science
                                
                                At Adobe, you will be immersed in an exceptional work environment that is recognized throughout the world on Best Companies lists. You will also be surrounded by colleagues who are committed to helping each other grow through our unique Check-In approach where ongoing feedback flows freely.
                                
                                If you’re looking to make an impact, Adobe's the place for you. Discover what our employees are saying about their career experiences on the Adobe Life blog and explore the meaningful benefits we offer.
                                
                                Adobe is an equal opportunity employer. We welcome and encourage diversity in the workplace regardless of race, gender, religion, age, sexual orientation, gender identity, disability or veteran status.
                                </div>
                            </div>

                            </div>
                            </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default JobsResultsPage;