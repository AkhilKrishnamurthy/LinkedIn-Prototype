import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/LoginAction';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

class Login extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    componentDidMount(){
        this.props.login();
    }

    render(){
        return(
            <div class="container">
                
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            <h2>Welcome Back</h2>
                            <p>Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
                        </div>
                        
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password"/>
                            </div>
                            <button class="btn btn-primary">Sign in</button>  
                            <br></br><br/>
                            <p>New to LinkedIn? Join now</p>    
                            <Link to = '/signup'>Join</Link>            
                    </div>
                </div>
            </div>
        );
    }

}

//Access to redux store
const mapStateToProps = state=>({
    loginStateStore : state.Login
});


//export default Login;
export default connect(mapStateToProps, {login})(Login);