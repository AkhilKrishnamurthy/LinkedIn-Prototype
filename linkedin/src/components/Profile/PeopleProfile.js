import React, {Component} from 'react';
import '../../static/css/PeopleProfile.css';
import Header from '../Header/Header';
import{Link} from 'react-router-dom';

class PeopleProfile extends Component{
    
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Header />
                <div className="row people-profile-container">
                    <div className="col-lg-1"></div>
                    <div className="content-container col-lg-8 mt-5">
                        <div className="intro-container border">
                            <div className="cover-image-container">
                                <img src="https://wallpapercave.com/wp/0557mer.jpg" alt="cover-img" />
                            </div>
                            <div className="profile-img-container ml-4">
                                <img className="profile-img" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="profile-img"/>
                            </div>
                            <div className="pull-down-div ml-4 row">
                                <div className="col-7">
                                    <div className="profile-name">Arivoli AE</div>
                                    <div className="profile-summary">Actively seeking Summer Internship | Studies at San Jose State University</div>
                                    <div>San Jose, California</div>
                                    <div className="mt-2"><button className="btn btn-md profile-btn">Connect</button></div>
                                </div>
                                <div className="col-5 flt-right">
                                    <div className="p-1">San Jose State University</div>
                                    <div className="p-1">See contact info</div>
                                    <div className="p-1"><i className="fas fa-user-friends pr-2"></i>See Connections</div>
                                </div>
                            </div> 
                            <hr className="ml-4 mr-4"/>   
                            <div className="mb-5 ml-4 mr-4">
                            I am pursuing Masters in Software Engineering specializing in Enterprise Software Technologies at San Jose State University. 

                                I am looking for opportunities in the field of Software Development. 

                                I worked as a Software Analyst at Aspire Systems. Strong engineering professional with a Bachelor of Technology (B.Tech.) focused in Computer Science from SASTRA University. 

                                I am very passionate about software engineering and eager to work with new technologies and in a challenging environment. I have over 18 months of experience as a Software Developer with a demonstrated history of working in the information technology and services industry. 

                                Skills:

                                PROGRAMMING: JAVA, C# .NET, Node JS (Express), React JS, Redux, HTML5, CSS, jQuery
                                TECHNOLOGIES: Apache Kafka, Mocha, JUnit, Episerver CMS, Azure, AWS
                                DATABASE: SQL Server, MySQL, MongoDB
                                TOOLS: JMeter, JIRA, Confluence, Git, IIS
                            </div>
                        </div>
                        <div className="exp-container mt-5">
                            <div className="ml-4">Experience</div>

                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default PeopleProfile;