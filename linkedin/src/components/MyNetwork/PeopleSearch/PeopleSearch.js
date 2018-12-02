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
import '../../static/css/JobResultsPage.css'

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

   let details = this.state.profiles.map(profile => {
       return(
           <tr onClick = {()=> this.expandProperty( profile._id)} >
               <td><b>{profile.user.Fname}</b> {profile.user.Lname}<br/>{profile.user.company} </td>
           </tr>
       )
   })
   return (
       <div>
           <div className="center-content my-network-container">
               <div className="pad-3-pc">
                   <div className="container invitation-container col-lg-6 col-md-6 col-sm-6">
           
                   <table class="list-table listingTable table table-hover ">
                       <tbody>
                           {/*Display the table row based on data recieved*/}
                           {details}
                       </tbody>
                   </table> 
                      
                   </div>
               </div>
           </div>
       </div>
   );
}
}

const mapStateToProps  = state =>({

  searchFieldToStore : state.peopleSearchFieldsStateStore
});

/* function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveSearchFieldToStore}, dispatch);
}
 */
export default connect(mapStateToProps, {})(PeopleSearch);