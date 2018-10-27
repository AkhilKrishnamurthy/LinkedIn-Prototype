import React, {Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <h1>Profile Page!</h1>
            </div>
        );
    }
}

export default Profile;