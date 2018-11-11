import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="header-container">
                <div className="container">
                    <div className="header-content-container">
                        <img className="img-container linkedIn-logo" src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png" alt="logo"></img>
                        <input className="search-box" type="text" placeholder="Search"></input>
                       <span className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/my-network">My Network</Link>
                        <Link to="/jobs">Jobs</Link>
                        <Link to="#">Messaging</Link>
                        <Link to="/profile">Profile</Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;