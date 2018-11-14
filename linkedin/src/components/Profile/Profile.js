import React, {Component} from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

class Profile extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Header />
                <div className = "homepage">
                    <div className="col-lg-9 border floatHome">
                    <img src = "https://coverfiles.alphacoders.com/498/49849.jpg"  width="100%" height="100%"/>
                    <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height="100" className="ProfileImage"/>
                        <div>
                            <p className="profileDescription">Akhil Krishnamoorthy</p>
                            <p className="profileDescription1">Grad Student at San Jose State University</p>
                            <div> 
                            <p className="">San Jose, California</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="col-lg-9 border floatHome">
                      <h3>Experience</h3>
                        <div className="ml-4 mt-5  col-lg-9">
                            <div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                    <span className="job-logo-container col-lg-2">
                                        <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </span>
                                    <span className="col-lg-9">
                                        <div className=""><b>Web Development Intern</b><br /></div>
                                        <div className="">Adobe</div>
                                        <div className="">2 yrs 3 mos </div>
                                        <div></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                    </span>
                                </div>
                                </div>
                                <div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                    <span className="job-logo-container col-lg-2">
                                        <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </span>
                                    <span className="col-lg-9">
                                        <div className=""><b>Web Development Intern</b><br /></div>
                                        <div className="">Adobe</div>
                                        <div className="">2 yrs 3 mos </div>
                                        <div></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                    </span>
                                </div>
                                </div>
                        <hr/>
                    </div>
                    </div>
                    <div className="col-lg-9 border floatHome">
                    <h3>Education</h3>
                      <div className="ml-4 mt-5  col-lg-9">
                          <div>
                              <div className="job-result-data p-3 mt-2 mb-2 row border">
                                  <span className="job-logo-container col-lg-2">
                                      <img className="job-logo" src="https://28dvez1wnqjyd37ed3lq71f6-wpengine.netdna-ssl.com/wp-content/themes/twenty-seventeen-child/assets/images/sjsu-logo-gold.png" alt="company-logo" />
                                  </span>
                                  <span className="col-lg-9">
                                      <div className=""><b>San Jose State 
                                          university</b><br /></div>
                                      <div className="">Master of Science - Computer Software Engineering</div>
                                      <div className="">2018-2020 </div>
                                      <div></div>
                                      <div>San Jose, CA</div>
                                      <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                  </span>
                              </div>
                              </div>
                              <div>
                              <div className="job-result-data p-3 mt-2 mb-2 row border">
                                  <span className="job-logo-container col-lg-2">
                                      <img className="job-logo" src="https://28dvez1wnqjyd37ed3lq71f6-wpengine.netdna-ssl.com/wp-content/themes/twenty-seventeen-child/assets/images/sjsu-logo-gold.png" alt="company-logo" />
                                  </span>
                                  <span className="col-lg-9">
                                  <div className=""><b>San Jose State 
                                          university</b><br /></div>
                                      <div className="">Master of Science - Computer Software Engineering</div>
                                      <div className="">2018-2020 </div>
                                      <div></div>
                                      <div>San Jose, CA</div>
                                      <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                  </span>
                              </div>
                              </div>
                      <hr/>
                  </div>
                  </div>
                  <div className="col-lg-9 border floatHome">
                  <h3>Skills</h3>
                      <div className="ml-4 mt-5  col-lg-9">
                          <div>
                              <div className="job-result-data p-3 mt-2 mb-2 row border">
            
                                  <span className="col-lg-9">
                                      <div className=""><b>Programming</b><br /></div>
                                      <hr/>
                                      <div className=""><b>C</b><br /></div>
                                      <hr/>
                                      <div className=""><b>C++</b><br /></div>
                                      <hr/>
                                      <div className=""><b>Python</b><br /></div>
                                      <hr/>
                                      <div className=""><b>JavaScript</b><br /></div>
                                      <hr/>
                                  </span>
                              </div>
                              </div>
                      <hr/>
                  </div>
                  </div>
                  
                 
                    </div>
                    </div>
        );
    }
}

export default Profile;