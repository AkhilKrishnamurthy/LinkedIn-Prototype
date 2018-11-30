import React, {Component} from 'react';
import '../../static/css/PeopleProfile.css';
import Header from '../Header/Header';

class PeopleProfile extends Component{
    
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                <Header />
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="content-container col-lg-8 mt-5">
                        <div className="intro-container">
                            <div className="cover-image-container">
                                <img src="https://wallpapercave.com/wp/0557mer.jpg" alt="cover-img" />
                            </div>
                            <div>
                                <p> Saumya Goyal</p>
                            </div>    


                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default PeopleProfile;