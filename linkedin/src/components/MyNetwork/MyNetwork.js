import React, { Component } from 'react';
import Header from '../Header/Header';
import '../../static/css/MyNetwork.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class MyNetwork extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            connectionRequests: []
        }

        //bind
        this.getPendingRequests = this.getPendingRequests.bind(this);
    }

    componentDidMount(){
        this.getPendingRequests();
    }

    getPendingRequests = ()=>{
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:3001/get-pending-requests')
            .then((response)=>{
                if(response.status === 200){
                    console.log('Response pedning requests', response.data);
                    this.setState({
                        connectionRequests : response.data
                    });
                }
            });
    }

    ignoreRequest = () =>{

    }

    acceptRequest = () =>{

    }

    render() {

        var requestContent = null;
        if(this.state.connectionRequests.length > 0){
            requestContent = this.state.connectionRequests.map(function(connection, index){
                return (
                    <div key={index}>
                    <hr/>
                    <div className="con-cotainer mt-1">
                        <div className="row">
                            <div className="col-1">
                                <img className="con-img" src="https://media.licdn.com/dms/image/C4E03AQF3EAyS7VQ-Aw/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=1cM7ryuycgyEF24SBwIBDT9_SnTGf9yQLBdapk2jGR8" alt="con-img"/>
                            </div>
                            <div className="col-6 ml-4">
                                <div><b>{connection.Fname} {connection.Lname}</b></div>
                                <div>{connection.aboutMe}</div>
                            </div>
                            <div className="col-4">
                                <Link to="#" className="ignore-link">Ignore</Link>
                                <button className="btn accept-btn ml-2">Accept</button>
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
                <div className="mynetwork-container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-5 con-content-container border mt-5 pb-3">
                            <h5 className="mt-2">Pending Requests</h5>
                          {requestContent}
                        </div>
                    </div>

                </div>
                {/* <div className="center-content my-network-container">
                    <div className="pad-3-pc">
                        <div className="people-search-container col-lg-6 col-md-6 col-sm-6">
                            <input type="text" className="form-control form-control-lg" placeholder="People search"></input>
                        </div>
                        <div className="container invitation-container col-lg-6 col-md-6 col-sm-6">
                            <div>
                                <hr />
                                <p>Name: new invitation</p>
                                <button className="btn btn-sm btn-success">Accept</button>
                                <button className="btn btn-sm btn-danger">Decline</button>
                                <hr />
                            </div>
                            <div>
                                <hr />
                                <p>Name: new invitation</p>
                                <button className="btn btn-sm btn-success">Accept</button>
                                <button className="btn btn-sm btn-danger">Decline</button>
                                <hr />
                            </div>
                            <div>
                                <hr />
                                <p>Name: new invitation</p>
                                <button className="btn btn-sm btn-success">Accept</button>
                                <button className="btn btn-sm btn-danger">Decline</button>
                                <hr />
                            </div>
                        </div>

                        <div className="container content-left-align connections-container col-lg-6 col-md-6 col-sm-6 mt-3">
                            <div>
                            <p><b>Connections</b></p>
                            </div>
                            
                            <div className="row">
                                <div className="col-4 pad-1-pc border">
                                    <div className="pad-1-pc center-content">
                                        <img className="connection-img" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="logo" />
                                        <p>Shubham</p>
                                        <p>Former Software Engineer</p>
                                        <button className="btn btn-sm btn-info">View Profile</button>

                                    </div>
                                </div>
                                <div className="col-4 pad-1-pc border">
                                    <div className="pad-1-pc center-content">
                                        <img className="connection-img" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="logo" />
                                        <p>Shubham</p>
                                        <p>Former Software Engineer</p>
                                        <button className="btn btn-sm btn-info">View Profile</button>
                                    </div>
                                </div>
                                <div className="col-4 pad-1-pc border">
                                    <div className="pad-1-pc center-content">
                                        <img className="connection-img" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="logo" />
                                        <p>Shubham</p>
                                        <p>Former Software Engineer</p>
                                        <button className="btn btn-sm btn-info">View Profile</button>

                                    </div>
                                </div>
                                <div className="col-4 pad-1-pc border">
                                    <div className="pad-1-pc center-content">
                                        <img className="connection-img" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="logo" />
                                        <p>Shubham</p>
                                        <p>Former Software Engineer</p>
                                        <button className="btn btn-sm btn-info">View Profile</button>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default MyNetwork;