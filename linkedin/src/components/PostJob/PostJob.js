import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import '../../App.css';

class PostJob extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <div className = "postJob">
                </div>
            </div>
        );
    }
}

export default PostJob;