import React, {Component} from 'react';

class LandingPage extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <h1>Analytics Landing page!</h1>
            </div>
        );
    }
}

export default LandingPage;