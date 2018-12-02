import React, { Component } from 'react';
import Header from '../Header/Header';
import '../../static/css/MyNetwork.css';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


class MyNetwork extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            connectionRequests: [],
            connectionRequestsUpdated: false,
            connections: []
        }

        //bind
        this.getPendingRequests = this.getPendingRequests.bind(this);
    }

    componentDidMount(){
        this.getPendingRequests();
        this.getConnections();
    }

    getConnections = ()=>{
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:3001/get-connections')
            .then((response)=>{
                if(response.status === 200){
                    console.log('Response connections', response.data);
                    this.setState({
                        connections : response.data
                    });
                }
            });
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

    ignoreRequest = (Parameter, event) =>{
        console.log('Ignore request no: ', Parameter);
        const index = Parameter;
        var data = {
            index : index
        }
        axios.defaults.withCredentials=true;
        axios.post('http://localhost:3001/ignore-request',data)
            .then((response)=>{
                if(response.status === 200){
                    console.log('Response ignore ', response.data);
                    this.setState({
                        connectionRequestsUpdated : true
                    });
                }
            });
    }

    acceptRequest = (Parameter, event) =>{
        const index = Parameter;
        var data = {
            index : index
        }
        axios.defaults.withCredentials=true;
        axios.post('http://localhost:3001/accept-request',data)
            .then((response)=>{
                if(response.status === 200){
                    console.log('Response ignore ', response.data);
                    this.setState({
                        connectionRequestsUpdated : true
                    });
                }
            });
    }

    render() {
        var redirectVar = null;
        if(this.props.loginStateStore.isAuthenticated === false){
            redirectVar  = <Redirect to="/signup"/>
        }

        var requestContent = null;
        if(this.state.connectionRequests.length > 0){
            requestContent = this.state.connectionRequests.map((request, index)=>{
                return (
                    <div key={index}>
                    <hr/>
                    <div className="con-cotainer mt-1">
                        <div className="row">
                            <div className="col-1">
                                <img className="con-img" src="https://media.licdn.com/dms/image/C4E03AQF3EAyS7VQ-Aw/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=1cM7ryuycgyEF24SBwIBDT9_SnTGf9yQLBdapk2jGR8" alt="con-img"/>
                            </div>
                            <div className="col-6 ml-4">
                                <div><b>{request.Fname} {request.Lname}</b></div>
                                <div>{request.aboutMe}</div>
                            </div>
                            <div className="col-4">
                                <Link to="#" className="ignore-link" onClick={this.ignoreRequest.bind(this, index)}>Ignore</Link>
                                <button className="btn accept-btn ml-2" onClick={this.acceptRequest.bind(this, index)}>Accept</button>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            });
        }

        var connectionsContent = null;
        if(this.state.connections.length > 0){
            connectionsContent = this.state.connections.map((connection, index)=>{
                return (
                    <div key={index}>
                    <hr/>
                    <div className="con-cotainer mt-1">
                        <div className="row">
                            <div className="col-1">
                                <img className="con-img" src="https://media.licdn.com/dms/image/C4E03AQF3EAyS7VQ-Aw/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=1cM7ryuycgyEF24SBwIBDT9_SnTGf9yQLBdapk2jGR8" alt="con-img"/>
                            </div>
                            <div className="col-7 ml-4">
                                <div><b>{connection.Fname} {connection.Lname}</b></div>
                                <div>{connection.aboutMe}</div>
                            </div>
                            <div className="col-3">
                                <button className="btn msg-btn ml-2">Message</button>
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
                            <h5 className="mt-2">Pending Requests</h5>
                          {requestContent}
                        </div>
                        <div className="col-4"></div>
                        <div className="col-3"></div>
                        <div className="col-5 con-content-container border mt-3 pb-3">
                        <h5 className="mt-2">Connections</h5>
                            {connectionsContent}
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}
const mapStateToProps = state =>({
    loginStateStore : state.Login
});

export default connect(mapStateToProps, {})(MyNetwork);