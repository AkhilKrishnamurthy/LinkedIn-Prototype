import React, {Component} from 'react';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import axios from "axios";
import {Redirect} from 'react-router';
import JobHeader from "../Header/JobHeader";

class JobPostingDetails extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    async componentDidMount(){
    
        axios.get('http://localhost:3001/JobPostingHistory')
            .then(async (response) => {
                console.log(response);
            // var arr = response.data;
    //         for(var i=0;i<arr.length;i++) {
    //         var images = arr[i].imageFiles;
    //         var match = images.split(',');
    //         var joined = [];
    //         joined.length = 0;
    //     arr[i].imageFiles = images;
    //     console.log(arr);
        
    // }
    // this.setState({
    //     property : this.state.property.concat(arr) 
    // });     
        });
    }

    render(){
        return(
            <div>
                <JobHeader />
                <div class="row">
          <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className="card mb-3 shadow-sm pad-3-pc">
                <center><img class="card-img-top" src="https://media.licdn.com/dms/image/C560BAQEVpdy_-U0fSQ/company-logo_100_100/0?e=1550102400&v=beta&t=SvuPc-kCSrsuSLjz6Lb8NvXqT9YghI8I4RV5uG7jT0U" alt="Card image cap"/></center>
                <div class="card-body center-content">
                <p><b>Software Engineer</b></p>
                <p>Snowflake Computing</p>
                <p>San Mateo, CA, USA</p> 
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
            </div>
        );
    }
}

export default JobPostingDetails;