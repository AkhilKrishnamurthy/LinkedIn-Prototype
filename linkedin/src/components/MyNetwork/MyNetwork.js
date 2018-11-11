import React, { Component } from 'react';
import Header from '../Header/Header';

class MyNetwork extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="center-content my-network-container">
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
                </div>
            </div>
        );
    }
}

export default MyNetwork;