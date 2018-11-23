import React, {Component} from 'react';
import axios from 'axios';
class SavedJobs extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            savedJobs:{}
        }
    }

    componentDidMount(){
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:3001/saved-jobs')
            .then((response)=>{
                if(response.status === 200){
                    console.log('saved jobs: ', response.data);
                    this.setState({
                        savedJobs: response.data
                    });
                }
            });
    }

    render(){
        return(
            <div>
                <h1>Saved Jobs!</h1>
            </div>
        )
    }
}

export default SavedJobs;