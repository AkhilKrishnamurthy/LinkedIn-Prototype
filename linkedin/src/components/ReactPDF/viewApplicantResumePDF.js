import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import sample from './Redux.pdf'
// import sample from 'C:/Users/akil/Desktop/LinkedIn_ProjectTeam_1/LinkedIn-Team1/LinkedIn-Backend/uploads/resume-samples.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { connect } from "react-redux";
import axios from "axios";
 
class ViewApplicantResumePDF extends Component {
  constructor(props){
    super(props);
    this.state = {
      numPages: 11,
      pageNumber: 1,
      resumeDisplay : ""
    }
}
  


  async componentDidMount(){
    console.log(this.props.ViewApplicantResume);
    if(this.props.ViewApplicantResume) {
    // console.log(this.props.ViewApplicantResume);
    console.log(this.props.ViewApplicantResume.resume);
    var resume = null;
      var data = {
        "resumeName": this.props.ViewApplicantResume.resume
      }
                 await axios.post('http://localhost:3001/download/'+ this.props.ViewApplicantResume.resume)
            .then(async (response)  => {
              console.log("response from download",response.data);
              resume = 'data:image/jpg;base64, ' + response.data;
            })

            console.log("response from download",resume);
            this.setState({
              resumeDisplay: resume
            })
      
  }

  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file={this.state.resumeDisplay}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                )
              }
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

// export default MyApp;
const mapStateToProps = state =>({
  ViewApplicantResume : state.ViewApplicantResume.result
});

//export default JobDisplayPage;
export default connect(mapStateToProps, {})(ViewApplicantResumePDF);