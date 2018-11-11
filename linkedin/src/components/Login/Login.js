import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/LoginAction';
import Header from '../Header/Header';

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
            <div>
            <Header/>
                <h1>Login page!</h1>
                <h3>{this.props.loginStateStore.result}</h3>
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