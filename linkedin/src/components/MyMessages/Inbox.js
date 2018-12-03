import React, { Component } from "react";
import JobHeader from "../Header/JobHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert'
import {saveMessageDetailsToStore} from '../../actions/jobResultsAction';
import {saveSearchFieldToStore} from '../../actions/jobSearchAction';
import '../../static/css/JobResultsPage.css'

class MyMessages extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      messageData: [],
      messageDetails: "",
      redirectToJobDisplayPage: false,
      saveClicked: false,
      redirectToJobApplication:false
    };

    this.sendMessageHandler = this.sendMessageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    console.log(JSON.stringify(nextprops))
  }

  componentDidMount() {
   // console.log("login reducer" + JSON.stringify(this.props.LoginStateStore.result.email))
    axios.defaults.withCredentials = true;
    var values = {
      senderEmailId : this.props.LoginStateStore.result.email
    }
    axios.post("http://localhost:3001/getmessages/",values).then(response => {
      if (response.status === 200) {
        var messageResult = response.data;
        console.log("message data", messageResult);
        if(messageResult.length === 0)
        {
          swal("No messages found","","warning")
        }
        else{
        this.setState({
          messageData: messageResult,
          messageDetails: messageResult[0],
          recieverEmail : ""
        });
      }
        console.log("messageDetails ID" + this.state.messageDetails._id)
  
      }     
    });
  }

  inputHandler = (e) => {
    this.setState({
        message : e.target.value
    })
  }

  sendMessageHandler = ()=>{
    console.log("Sender Email ID " + this.props.loginreducer)
      var senderdetailstoggle;
      if(this.state.messageDetails.senderEmailId === this.props.LoginStateStore.result.email)
      {
        senderdetailstoggle = this.state.messageDetails.receiverEmailId
      }
      else
      {
        senderdetailstoggle = this.state.messageDetails.senderEmailId
      }

    var values = {
        messageThread : this.props.LoginStateStore.result.FName + " : " + this.state.message,
        senderEmailId : this.props.LoginStateStore.result.email,
        receiverEmailId : senderdetailstoggle
    }
    console.log("values send" + JSON.stringify(values))
    axios.post('http://localhost:3001/sendmessage', values)
        .then((response)=>{
            if(response.status === 200){
                console.log("Message sent")
            }
        });  
    
}

  toggleDetailsPane = (Parameter, event) =>{
      //const target = event.target;
        const index = Parameter;
        var messageDetail = this.state.messageData[index];
        
        
        console.log('job details', messageDetail);
        this.setState({
            messageDetails: messageDetail,

        });
  }

  render() {
    var sendertoggle;
    // var senderdetailstoggle;
    var redirectVar = null;
    if(this.props.LoginStateStore.isAuthenticated === false){
        redirectVar  = <Redirect to="/signup"/>
    }
    console.log(this.state.messageData)
    var briefPaneContent = this.state.messageData.map((message, index)=> {
      if(message.senderEmailId === this.props.LoginStateStore.result.email)
      {
        sendertoggle = message.receiverEmailId
      }
      else
      {
        sendertoggle = message.senderEmailId
      }
      // if(this.state.messageDetails.senderEmailId === this.props.LoginStateStore.result.email)
      // {
      //   senderdetailstoggle = this.state.messageDetails.receiverEmailId
      // }
      // else
      // {
      //   senderdetailstoggle = this.state.messageDetails.senderEmailId
      // }
      return (
        <div className="job-result-data p-3 mt-2 mb-2 row border" key={index}>
          <span className="job-logo-container col-lg-2">
            <img
              className="job-logo"
              src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc"
              alt="company-logo"
            />
          </span>
          <span className="col-lg-10">
            <div className="">
              <b>
                <Link to="#" onClick={this.toggleDetailsPane.bind(this, index)}>{sendertoggle}</Link>
              </b>
              <br />
            </div>
          </span>
        </div>
      );
    });

    var detailsPaneContent = (
      <div className="mt-2 border">
        <div className="job-title-container pad-2-pc row">

          <div className="col-lg-9">
            {/* <div className="">
              <b> 
                <Link to="#">{senderdetailstoggle}</Link>
              </b>
              <br />
            </div> */}
            <div className="">
              {this.state.messageDetails.messageThread}
              <hr/>
            </div>

          </div>
        </div>
        <hr />

        <div className="pad-2-pc job-desc-cotainer">
        <form>
              <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">Message:</label>
              <textarea className="form-control" id="message-text" onChange = {this.inputHandler}></textarea>
              <button type="button" className="btn btn-primary" onClick = {this.sendMessageHandler}>Send</button>
              </div>
        </form>
        </div>
      </div>
    );

    return (
      <div>
        {redirectVar}
        <JobHeader />

        <div>

          <div className="row center-content">
            <div className="col-lg-1 col-md-1 col-sm-1" />
            <div className="ml-4 mt-5 jobs-result-container content-left-align col-lg-5 col-md-5 col-sm-5">
              <div>{briefPaneContent}</div>
            </div>
            <div className="mt-5 jobs-result-details-container content-left-align col-lg-5 col-md-5 col-sm-5">
              <div className="">{detailsPaneContent}</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
//mapStateToProps

const mapStateToProps  = state =>({
  LoginStateStore : state.Login
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ saveSearchFieldToStore }, dispatch);
// }

export default connect(mapStateToProps, null)(MyMessages);