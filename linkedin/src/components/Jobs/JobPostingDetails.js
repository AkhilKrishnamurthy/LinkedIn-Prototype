import React, {Component} from 'react';
import Header from '../Header/Header';

class JobPostingDetails extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <p>Posting Details</p>
            </div>
        );
    }
}

export default JobPostingDetails;