import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <h1>Header Page!</h1>
        );
    }
}
export default Header;