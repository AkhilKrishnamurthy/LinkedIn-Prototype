import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header1 extends Component {
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
                        <span className="nav-links">
                        <Link to="/login">Sign in</Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header1;