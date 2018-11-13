import React, { Component } from "react";
import Header1 from "../Header/Header1";
class Signup extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Header1 />
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <h2>Be great at what you do</h2>
              <p>Get started - it's free.</p>
            </div>
            <div class="container">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="Name"
                    placeholder="First Name"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="Name"
                    placeholder="Last Name"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="Email"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="Password"
                    placeholder="Password"
                  />
                </div>
                <br />
                <div>
                  <button class="btn btn-success" type="submit">
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
