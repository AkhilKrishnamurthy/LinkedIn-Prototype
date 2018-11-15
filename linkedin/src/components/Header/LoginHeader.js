import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoginHeader extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="header-container">
        <div className="container">
          <div className="header-content-container">
            <img
              className="img-container linkedIn-logo"
              src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png"
              alt="logo"
            />
            <span className="nav-links">
              <input type="search" placeholder="Email" aria-label="Email" />
              <input
                type="search"
                placeholder="Password"
                aria-label="Password"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Sign in
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginHeader;
