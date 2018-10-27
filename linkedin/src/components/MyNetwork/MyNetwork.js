import React, {Component} from 'react';

class MyNetwork extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <h1>My Network!</h1>
            </div>
        );
    }
}

export default MyNetwork;