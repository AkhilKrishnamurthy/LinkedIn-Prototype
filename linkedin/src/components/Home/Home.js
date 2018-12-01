import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import '../../App.css';
import {login} from '../../actions/LoginAction';
import {Redirect} from 'react-router';

class Home extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        var redirectVar = null;
        console.log(this.props.loginStateStore);
        if(this.props.loginStateStore==undefined) {
            redirectVar = <Redirect to= "/login"/>
        }
        var profileName = null;
        if(this.props && this.props.loginStateStore && this.props.loginStateStore.responseFlag) {
            profileName = <p className="profileDescriptionHome">{this.props.loginStateStore.FName}</p>
        }
        // else {
        //     redirectVar = <Redirect to= "/login"/>
        // }
        
        return(
            <div>
                 {redirectVar}
                <Header/>
                <div className = "homepage">
                    <div className="col-lg-2 border floatHome border border-secondary">
                    <img src = "https://coverfiles.alphacoders.com/498/49849.jpg"  width="100%" height="50"/>
                    <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height="10" className="homeProfileImage"/>
                        <div>
                            {profileName}
                            <p>Grad Student at San Jose State University</p>
                            <div className="homeConnectionDetails"> 
                            <p className="">Who's viewed your profile:42</p>
                            <p className="">connections: 162</p>
                            <p className="">Your saved articles: 2</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="col-lg-6 border floatHome">
                    <div className = "AllPosts">
                    <div className="postbyOneCompany border border-secondary">
                    <span className = "companyDescImage"><img src = "https://getcake.com/wp-content/uploads/2014/08/in-the-news-forbes-logo.jpg" width="40" height="70"></img></span>
                    <div>
                        <span>Forbes</span>
                        <br/>
                        <span>8,282,383 Followers</span>
                        <br/>
                        <span>7h</span>
                    </div>
                    <br/>
                        <p> Quote of the day:</p>
                        <img src = "https://media.licdn.com/media-proxy/ext?w=1200&h=675&f=pj&hash=kefV8oQnTK12%2FzOOnmLIr1XaHEc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R65gwkZxhJs4b2SqFujqlRXV4vSCWzjRXb1p8qEZnT2O5KcIPj08EBVJ2lDw1Eve-msQTiwRpehfovvK8F1jJTtOcKyNldLb09lhD0d6IZuOhwh-MzxULmnOHkdi6JIYyg"
                        width="100%" height="300"/>
                        <div>
                        <span>3438 likes </span>
                        <span>27 comments</span>
                    </div>
                    </div>
                    <br/>

                    <div className="postbyOneCompany ml-1 border border-secondary">
                    <span className = "companyDescImage"><img src = "https://getcake.com/wp-content/uploads/2014/08/in-the-news-forbes-logo.jpg" width="40" height="70"></img></span>
                    <div>
                        <span>Forbes</span>
                        <br/>
                        <span>8,282,383 Followers</span>
                        <br/>
                        <span>7h</span>
                    </div>
                    <br/>
                        <p> Quote of the day:</p>
                        <img src = "https://media.licdn.com/media-proxy/ext?w=1200&h=675&f=pj&hash=kefV8oQnTK12%2FzOOnmLIr1XaHEc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R65gwkZxhJs4b2SqFujqlRXV4vSCWzjRXb1p8qEZnT2O5KcIPj08EBVJ2lDw1Eve-msQTiwRpehfovvK8F1jJTtOcKyNldLb09lhD0d6IZuOhwh-MzxULmnOHkdi6JIYyg"
                        width="100%" height="300"/>
                        <div>
                        <span>3438 likes </span>
                        <span>27 comments</span>
                    </div>
                    </div>

                    <div className="postbyOneCompany">
                    <span className = "companyDescImage"><img src = "https://getcake.com/wp-content/uploads/2014/08/in-the-news-forbes-logo.jpg" width="40" height="70"></img></span>
                    <div>
                        <span>Forbes</span>
                        <br/>
                        <span>8,282,383 Followers</span>
                        <br/>
                        <span>7h</span>
                    </div>
                    <br/>
                        <p> Quote of the day:</p>
                        <img src = "https://media.licdn.com/media-proxy/ext?w=1200&h=675&f=pj&hash=kefV8oQnTK12%2FzOOnmLIr1XaHEc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R65gwkZxhJs4b2SqFujqlRXV4vSCWzjRXb1p8qEZnT2O5KcIPj08EBVJ2lDw1Eve-msQTiwRpehfovvK8F1jJTtOcKyNldLb09lhD0d6IZuOhwh-MzxULmnOHkdi6JIYyg"
                        width="100%" height="300"/>
                        <div>
                        <span>3438 likes </span>
                        <span>27 comments</span>
                    </div>
                    </div>

                    <div className="postbyOneCompany">
                    <span className = "companyDescImage"><img src = "https://getcake.com/wp-content/uploads/2014/08/in-the-news-forbes-logo.jpg" width="40" height="70"></img></span>
                    <div>
                        <span>Forbes</span>
                        <br/>
                        <span>8,282,383 Followers</span>
                        <br/>
                        <span>7h</span>
                    </div>
                    <br/>
                        <p> Quote of the day:</p>
                        <img src = "https://media.licdn.com/media-proxy/ext?w=1200&h=675&f=pj&hash=kefV8oQnTK12%2FzOOnmLIr1XaHEc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R65gwkZxhJs4b2SqFujqlRXV4vSCWzjRXb1p8qEZnT2O5KcIPj08EBVJ2lDw1Eve-msQTiwRpehfovvK8F1jJTtOcKyNldLb09lhD0d6IZuOhwh-MzxULmnOHkdi6JIYyg"
                        width="100%" height="300"/>
                        <div>
                        <span>3438 likes </span>
                        <span>27 comments</span>
                    </div>
                    </div>

                    </div>
                    </div>


                    <div className="col-lg-3 border floatHome border border-secondary">
                    <p>What people are talking about now</p>
                    <br/>
                    <div className="bulletPoints">
                    <p>Immigration crackdown hits 7-Eleven</p>
                    <p>Blco</p>
                    </div>
                    </div>






                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("Login state update",state);
    return { loginStateStore : state.Login.result };
  }
export default connect(mapStateToProps, {})(Home);