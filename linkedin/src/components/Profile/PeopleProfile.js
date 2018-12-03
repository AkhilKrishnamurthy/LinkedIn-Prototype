import React, {Component} from 'react';
import '../../static/css/PeopleProfile.css';
import Header from '../Header/Header';
import{Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {saveJobDetailsToStore} from '../../actions/jobResultsAction';
import {Redirect} from 'react-router-dom';


class PeopleProfile extends Component{
    
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            profile: [],
            message : [],
            senderEmailId : '',
            receiverEmailId : '',
            FName : '',
            isConnection : false
        };

        //bind
        this.addConnection = this.addConnection.bind(this);
        this.logProfileView = this.logProfileView.bind(this);
        this.sendMessageHandler = this.sendMessageHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    componentWillReceiveProps(nextprops){
        console.log(nextprops)
    }

    componentDidMount(){
        
        this.isConnection();
        this.logProfileView();
        
        axios.defaults.withCredentials=true;
        console.log("profile",this.props.profileResultsStateStore.result.user.experience.length);
        var skillsresult = (this.props.profileResultsStateStore.result.user.skills).split(',');
        console.log("skills:",skillsresult );
        console.log("sender" + this.props.loginStateStore.result.email)
        this.setState({
            profile :  this.props.profileResultsStateStore.result.user,
            senderEmailId : this.props.loginStateStore.result.email 
        });
        // this.setState({
        //     senderEmailId : this.props.loginStateStore.result.email,
        //     receiverEmailId : "aehari2010@gmail.com",
        //     FName : this.props.loginStateStore.result.FName
        // }) 
          // var profileData = this.props.profileResultsStateStore.result.user      
    }

    isConnection = () => {
        var connectionsArr = this.props.profileResultsStateStore.result.connections;
        if(connectionsArr.length > 0){
            for(var i=0;i<connectionsArr.length;i++){
                console.log('IsConnection!');
                if(connectionsArr[i].email == this.props.loginStateStore.result.email){
                    console.log('Is a Connection');
                    this.setState({
                        isConnection: true
                    });
                    break;
                }
                
            }
        }
        else{
            this.setState({
                isConnection: false
            });
        }
        

    }

    
    logProfileView = ()=>{
        axios.defaults.withCredentials=true;
        var data = {
            profileEmail : this.props.loginStateStore.result.email,
            viewTime : new Date()
        }

        axios.post('http://localhost:3001/log-profile-view', data)
            .then((response)=>{
                if(response.status === 200){
                    console.log('profile view response', response.data);
                }
            });

    }

    addConnection = ()=>{
        
        var profileData = {
            email : this.props.profileResultsStateStore.result.user.email,
            connectProfileData : {}
        };
        axios.defaults.withCredentials=true;
        
        var data = {
            email: this.props.loginStateStore.result.email
        }
        console.log('data req', data);
        axios.post('http://localhost:3001/get-profile-data', data)
            .then((response)=>{
                if(response.status === 200){
                    console.log('response profile', response.data);
                
                    profileData.connectProfileData = response.data.user;
                    console.log('profile data: ', profileData);
                    axios.post('http://localhost:3001/send-connection-request', profileData)
                    .then((response)=>{
                        console.log('Send Connection res', response.data);
                    });
                }
            });    
    }

    inputHandler = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    sendMessageHandler = ()=>{
        console.log("Sender Email ID " + this.state.senderEmailId)
        var values = {
            messageThread : "this.state.FName" + " : " + this.state.message,
            senderEmailId :  "amruta@gmail.com", //this.state.senderEmailId,
            receiverEmailId : "aehari2010@gmail.com" //this.state.receiverEmailId
        }
        console.log(JSON.stringify(values))
        axios.post('http://localhost:3001/sendmessage', values)
            .then((response)=>{
                if(response.status === 200){
                    console.log("Message sent")
                }
            });  
        
    }

    render(){

        var redirectVar = null;
        if(this.props.loginStateStore.isAuthenticated === false){
            redirectVar  = <Redirect to="/signup"/>
        }

         var experience = null;
        if(this.props.profileResultsStateStore.result.user.experience.length > 0){
            experience = this.props.profileResultsStateStore.result.user.experience.map((exp, index)=>{
                return (
                    <div key={index}>
                     <div className="exp-content-container ml-4 row">
                                <div className="col-1">
                                    <img className="profile-company-img-container" src="https://media.licdn.com/dms/image/C4D0BAQEl0ggQ_q2eow/company-logo_400_400/0?e=1551916800&v=beta&t=bRRW076zg7OTMag2B9OrXHSfIXdP9GRXVd5YVUNr3bw" alt="profile-company-img"/>
                                </div>
                                <div className="col-6 ml-4">
                                    <div>{exp.designation}</div>
                                    <div>{exp.companyname}</div>
                                    <div>{exp.responsibility}</div>
                                    <div>{exp.location}</div>
                                </div>
                            </div>
                            <hr/>
                            </div>
                            )
                        });
                    } 

                    var education = null;
        if(this.props.profileResultsStateStore.result.user.education.length > 0){
            education = this.props.profileResultsStateStore.result.user.education.map((edu, index)=>{
                return (
                    <div key={index}>
                     <div className="exp-content-container ml-4 row">
                                <div className="col-1">
                                    <img className="profile-company-img-container" src="https://media.licdn.com/dms/image/C4D0BAQEl0ggQ_q2eow/company-logo_400_400/0?e=1551916800&v=beta&t=bRRW076zg7OTMag2B9OrXHSfIXdP9GRXVd5YVUNr3bw" alt="profile-company-img"/>
                                </div>
                                <div className="col-6 ml-4">
                                    <div>{edu.school}</div>
                                    <div>{edu.degree}</div>
                                    <div>{edu.fromyear} - {edu.toyear}</div>
                                </div>
                            </div>
                            <hr/>
                            </div>
                            )
                        });
                    } 

            var skillsresult = (this.props.profileResultsStateStore.result.user.skills).split(',');
            var skillsresult1 = null;
            console.log(skillsresult);
            if(skillsresult.length > 0){
                 skillsresult1 = skillsresult.map((skill, index)=>{
                    return (
                        <div key={index}>
            <div className="skills-content-container ml-4">
            <div className="skill-name">{skill}</div>
        </div>
        <hr/>
        </div>
              )
            });
        } 

        var connectButton = null;
        var messageButton = null;
        if(this.state.isConnection === false){
            connectButton = <div className="mt-2"><button className="btn btn-md profile-btn" onClick={this.addConnection}>Connect</button></div>
        }
        if(this.state.isConnection === true){
            messageButton = <div>Message</div>
        }
        

        return(
            <div>
                 {redirectVar}
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
                                    <div className="profile-name">{this.state.profile.Fname} {this.state.profile.Lname}</div>
                                    <div className="profile-summary">{this.state.profile.aboutMe}</div>
                                    <div>{this.state.profile.city}, {this.state.profile.state}</div>
                                    <div className="mt-2"><button className="btn btn-md profile-btn" onClick={this.addConnection}>Connect</button></div>
                                    {/* <div className="mt-2"><button className="btn btn-md profile-btn" onClick={this.sendMessage}>Message</button></div> */}
                                <div className="mt-2">
                                <button type="button" className="btn btn-md profile-btn" data-toggle="modal" data-target="#exampleModal">
                                Message
                                </button>

                                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Send message to Arivoli</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                                            <textarea className="form-control" id="message-text" onChange = {this.inputHandler}></textarea>
                                        </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick = {this.sendMessageHandler}>Send</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>


                                    {connectButton}
                                    {messageButton}
                                </div>
                                <div className="col-5 flt-right">
                                    <div className="p-1">{this.state.profile.Company}</div>
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
                        <div className="exp-container mt-5 border pb-3">
                            <h4 className="ml-4 mt-4">Experience</h4>
                            <hr/>
                           {experience}
                        </div>
                        <div className="edu-container mt-5 border pb-4">
                            <h4 className="ml-4 mt-4">Education</h4>
                            <hr/>
                            {education}
                        </div>
                        <div className="profile-skills-container mt-5 border pb-4">
                            <h4 className="ml-4 mt-4">Skills</h4>
                            <hr/>
                           {skillsresult1}
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}

const mapStateToProps = state =>({
    profileResultsStateStore : state.profileResultsStateStore,
    loginStateStore : state.Login
});

//export default JobDisplayPage;
export default connect(mapStateToProps, {})(PeopleProfile);
