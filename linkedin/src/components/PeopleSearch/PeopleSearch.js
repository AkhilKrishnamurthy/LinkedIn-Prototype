import React, { Component } from "react";
import JobHeader from "../Header/JobHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert'
//import {saveJobDetailsToStore} from '../../actions/jobResultsAction';
import {saveSearchFieldToStore} from '../../actions/peopleSearchAction';
import '../../static/css/MyNetwork.css';
import Header from '../Header/Header';

class PeopleSearch extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const MAX_LENGTH = 250;
    this.state = {
      profiles: []
    };

    //bind
    //this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentDidMount() {
     // console.log(this.props.searchFieldToStore.searchfieldresult.query);
    axios.defaults.withCredentials = true;
    var data = {
      query :  this.props.searchFieldToStore.searchfieldresult.query
  }

  console.log("data" + data.query)
  axios.post('http://localhost:3001/peopleSearch',data)
  .then((response) => {
      console.log(response.data);
     this.setState({
         profiles : response.data
     });
 }); 

  }


render() {
    var redirectVar = null;
    if(this.props.loginStateStore.isAuthenticated === false){
        redirectVar  = <Redirect to="/login"/>
    }

    var requestProfiles = null;
    if(this.state.profiles.length > 0){
        requestProfiles = this.state.profiles.map((profile, index)=>{
            return (
                <div key={index}>
                <hr/>
                <div className="con-cotainer mt-1">
                    <div className="row">
                        <div className="col-1">
                            <img className="con-img" src="https://media.licdn.com/dms/image/C4E03AQF3EAyS7VQ-Aw/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=1cM7ryuycgyEF24SBwIBDT9_SnTGf9yQLBdapk2jGR8" alt="con-img"/>
                        </div>
                        <div className="col-6 ml-4">
                            <div><b>{profile.user.Fname} {profile.user.Lname}</b></div>
                            <div>{profile.user.aboutMe}</div>
                        </div>
                        <div className="col-4">
                            <button className="btn accept-btn ml-2" /* onClick={this.acceptRequest.bind(this, index)}*/>Message</button>
                        </div>
                    </div>
                </div>
                </div>
            )
        });
    }

    return (
        <div>
            <Header />
            {redirectVar}
            <div className="mynetwork-container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-5 con-req-container border mt-5 pb-3">
                      {requestProfiles}
                    </div>
                </div>
            </div>                
        </div>
    );
}
}


const mapStateToProps  = state =>({
    loginStateStore : state.Login,
  searchFieldToStore : state.peopleSearchFieldsStateStore
});

/* function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveSearchFieldToStore}, dispatch);
}
 */
export default connect(mapStateToProps, {})(PeopleSearch);