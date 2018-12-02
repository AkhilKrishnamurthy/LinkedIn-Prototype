import React, {Component} from 'react';
import Header from '../Header/Header';
import './modal.css'; 
import axios from "axios";
import { Link } from 'react-router-dom';

class Profile extends Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state={
            test : [],
            fname : "",
            lname : "",
            company : "",
            city : "",
            aboutMe:"",

            //copy
            fname1 : "",
            lname1 : "",
            company1 : "",
            city1 : "",
            aboutMe1:"",

            //rerender variable
           
            isupdated:0,

          

            //experience
            experience:[],
            tempexp:[],

            exp1:[],

            experienceid:0,
            showmodaleditexperience:false,
            showmodaladdexperience:false,

            //add new experience in array variables
            adddesignation:"",
            addcompanyname:"",
            addlocation:"",
            addresponsibility:"",

            addtestdesignation:"",
            addtestcompanyname:"",
            addtestlocation:"",
            addtestresponsibility:"",

              //education variables
              education:[],

            edu1:[],

            educationid:0,
            showmodalediteducation:false,
            showmodaladdeducation:false,
                isexpUpdated:false,
            //add new experience in array variables
            addschool:"",
            adddegree:"",
            addfromyear:"",
            addtoyear:"",

            //skills
            skills : [],
            skillstr : "",

            //cancel reload
            rel:false
        }
    }


//axios post calls to backend after saving changes in modal

//call to save edited personal details 
savepersonaldetailschanges=(e)=>{
    e.preventDefault();
    console.log("inside save pd call");
    var data = {email:'pp@gmail.com',Fname:this.state.fname,Lname:this.state.lname,company:this.state.company, city:this.state.city,aboutMe:this.state.aboutMe}
    console.log("axios pd data is ",data);
    axios.post('http://localhost:3001/updatepdprofile',data)
    .then(response=>{
        if(response.status === 200){
            console.log("inside resp status");
            var isupdated = 1+this.state.isupdated;
           this.setState({isupdated:isupdated});
            }
            else{
                console.log("error updating");
            }
            console.log("state",this.state.isupdated);
    })
}


//call to save edited experience changes
saveexperiencechanges=(e)=>{
    //e.preventDefault();
    console.log("save add exp changes",this.state.exp1);
    var data = {email:'pp@gmail.com',experience:this.state.exp1};
    var param = {st:"im doing linkedin"};
    console.log("axios experience data is ",data);
    axios.post('http://localhost:3001/updateexpprofile',data)
    .then(response=>{
        console.log(response);
        console.log("exp1 val",this.state.exp1);
    })
    

}

//call to save edited education changes
saveeducationchanges=(e)=>{
    e.preventDefault();
    var data = {education:this.state.education}
    console.log("axios education data is ",data);
    axios.post('http://localhost:3001/updateeduprofile',data)
    .then()
}


//call to save edited skills changes
saveskillschanges=(e)=>{
    console.log("inside save skill axios call");
    e.preventDefault();
    var data = {email:'pp@gmail.com',skills:this.state.skillstr}
    console.log("axios skills data is ",data);
    axios.post('http://localhost:3001/updateskillsprofile',data)
    .then(response=>{
        console.log(response);
        if(response.status === 200){
            var isupdated = 1+this.state.isupdated;
            this.setState({isupdated:isupdated});
        }
        else{
            console.log("error updating");
        }
        //console.log("state",isupdated);
        console.log("",this.state.skillstr);
        
    })

}


//axios post call section ends



    //component did mount for the first render
     componentDidMount(){
        console.log("COMPONENT DID MOUNT");
        const data = {email:'pp@gmail.com'};
        // variable s would contain response string from fetch for skills
        axios.post('http://localhost:3001/FetchProfile',data).then(response => {
            //update the state with the response data
            console.log(response.data);
            console.log("Response of did mount",response);
            var output = response.data;
            console.log("output is",output.docs);
            var experience1 = output.docs.user.experience;
            console.log('experience1',experience1);
            var test = output.docs.user.experience;
            var experience = [...output.docs.user.experience];
            var education  = [...output.docs.user.education];
            var tempexp = [...output.docs.user.experience];

            var s = output.docs.user.skills;

        

            var skillsresult = s.split(',');
             
            console.log('above this.state',skillsresult);
            console.log("test value is",test);
            this.setState({
                test:test,
              fname:output.docs.user.Fname,
              lname:output.docs.user.Lname,
              company:output.docs.user.company,
              city:output.docs.user.output,
              aboutMe:output.docs.user.aboutMe,


              //copy
              fname1:output.docs.user.Fname,
              lname1:output.docs.user.Lname,
              company1:output.docs.user.company,
              city1:output.docs.user.output,
              aboutMe1:output.docs.user.aboutMe,

              experience:experience,

              education:education,

              tempexp:tempexp,

               skills:skillsresult,
              skillstr:s 
              
            });
            console.log("thisi is m experience array state",this.state.experience);
            console.log(output.docs);
            console.log("fname db",output.docs.user.Fname);
            console.log('Fname',this.state.fname);
            console.log('Fname',this.state.company);
            console.log('Fname',this.state.city);
            console.log('skillstr',this.state.skillstr);
            console.log('skill',this.state.skill);
            console.log('skillsresult',skillsresult);
            console.log('test after setting it',this.state.test);
          }); 
          }   
        
    //componentDidUpdate start

   /* componentDidUpdate(){

   } */

    //componentDidUpdate end

    //assign array index id to modal to populate particular array element //handle edit experience modal
    handleeditexperiencemodal=(id)=>{
        console.log("Index is",id);
        this.setState({experienceid:id,
            showmodaleditexperience:true});

    }

    handledeleteexperiencemodal=(id)=>{
       
        var experience = [...this.state.experience];
     
var index = id;
if (index > -1) {
  experience.splice(index, 1);
}
// array = [2, 9]
console.log("Experience is isi isisisis",experience);
var data = {email:'pp@gmail.com',experience:experience};
axios.post('http://localhost:3001/updateexpprofile',data)
       .then(response=>{
           console.log("Resose",response);
           if(response.status===200)

           {  console.log("Inside del");
               this.setState({isExpUpdated:true});}
           
       }) 




       

    }

    //handle add experience modal

    handleaddexperiencemodal=()=>{
        console.log("test");
        this.setState({
            showmodaladdexperience:true
        });
    }


    //handle add object to experience array
    handleaddtoexperiencearray=(e)=>{
        e.preventDefault();
        const addtestcompanyname = this.state.addtestcompanyname;
    const addtestdesignation = this.state.addtestdesignation;
    const  addtestlocation  = this.state.addtestlocation;
    const  addtestresponsibility = this.state.addtestresponsibility;
    const obj = {'designation':addtestdesignation, 'companyname': addtestcompanyname, 'location':addtestlocation, 'responsibility':addtestresponsibility };
    const test = this.state.test.slice();
    test.push(obj);
    console.log('test the o/p',test);
    var data = {email:'pp@gmail.com',experience:test};
    axios.post('http://localhost:3001/updateexpprofile',data)
    .then(response=>{
        this
        console.log(response);
        console.log("experience val",this.state.test);

    }) 

        //console.log("state experience",this.state.exp1);
        //axios post call to send the value to the db.
       
        
    }



    //handle fieldchanges for personal details
    /* handlefieldchanges=(event)=>{

        this.setState({[event.target.id]:event.target.value});

    } */




    //fieldchanges for experience
    handlefieldchangesexperience=(event)=>{
        
        console.log("Exeperience 0 ",this.state.experience[this.state.experienceid].designation)
        console.log(event.target.id);
        console.log(event.target.value);
        const idvar = event.target.id;
        const val = event.target.value;

        if(event.target.id === "designation")
        {
            var experience = [...this.state.experience];
            const experienceid = this.state.experienceid;
            experience[experienceid].designation = event.target.value;
            console.log('experience designation',experience);
            this.setState({experience:experience});
            console.log(this.state.experience);
        }
      
       if(event.target.id === "companyname")
       {
        var experience1 = [...this.state.experience];
        const experienceid = this.state.experienceid;
        experience1[experienceid].companyname = event.target.value;
        console.log('experience companyname',experience1);
        this.setState({experience:experience1});
        console.log(this.state.experience);
       } 

       if(event.target.id === "location")
       {
        var experience2 = [...this.state.experience];
        const experienceid = this.state.experienceid;
        experience2[experienceid].location = event.target.value;
        console.log('experience location',experience2);
        this.setState({experience:experience2});
        console.log(this.state.experience);
       } 


       if(event.target.id === "responsibility")
       {
        var experience3 = [...this.state.experience];
        const experienceid = this.state.experienceid;
        experience3[experienceid].responsibility = event.target.value;
        console.log('experience responsiblilty',experience3);
        this.setState({experience:experience3});
        console.log(this.state.experience);
       } 

       
    }
 
    
    //cancel edit experience start

    canceleditexperiencechanges=(e)=>{
        e.preventDefault();
        this.setState({rel:true});
        //console.log("Reload value for cancel",this.state.rel);
        //window.location.reload();
    }

    //cancel edit experience end


    saveeditexperiencechanges=(e)=>{
        e.preventDefault();
        console.log('edit experience of the ',this.state.experience);
        var data = {email:'pp@gmail.com',experience:this.state.experience};
       
       console.log("axios experience data is edited ",data);
       axios.post('http://localhost:3001/updateexpprofile',data)
       .then(response=>{
           console.log(response);
           console.log("experience val",this.state.experience);
       }) 

    }

    //For education functions start





    handleediteducationmodal=(id1)=>{
        this.setState({educationid:id1,
            showmodalediteducation:true});

    }

    handledeleteeducationmodal=(id1)=>{
       
        var education = [...this.state.education];
     
var index1 = id1;
if (index1 > -1) {
  education.splice(index1, 1);
}
// array = [2, 9]
console.log(education);
    }

    //handle add experience modal

    handleaddeducationmodal=()=>{
        console.log("test1");
        this.setState({
            showmodaladdeducation:true
        });
    }


    //handle add object to experience array
    handleaddtoeducationarray=(e)=>{
        e.preventDefault();
        console.log("inside add1");
        console.log("state school",this.state.addschool);
        var self= this.state;
        var education = [...this.state.edu1];
        education.push({
            school:self.addschool,
            degree:self.adddegree,
            fromyear:self.addfromyear,
            toyear:self.addtoyear
            
        })
        console.log("Education array",education);
        this.setState({edu1:education});
        console.log("state experience",this.state.edu1);
        //axios post call to send the value to the db.
        //axios.post('/profile',)
        var data = {Fname:this.state.fname,Lname:this.state.lname,company:this.state.company, city:this.state.city,aboutMe:this.state.aboutMe,experience:this.state.experience,education:this.state.education,skills:this.state.skills}
        console.log("data is ",data);
        axios.post('/profile',data)
        .then()
    }



    //handle fieldchanges for personal details,experience,education variables in state
    handlefieldchanges=(event)=>{

        this.setState({[event.target.id]:event.target.value});

    }




    //fieldchanges for experience
    handlefieldchangeseducation=(event)=>{
        
        console.log("Education 0 ",this.state.education[this.state.educationid].school)
        console.log(event.target.id);
        console.log(event.target.value);
        const idvar = event.target.id;
        const val = event.target.value;

        if(event.target.id === "school")
        {
            var education = [...this.state.education];
            const educationid = this.state.educationid;
            education[educationid].school = event.target.value;
            console.log('education',education);
            this.setState({education:education});
            console.log(this.state.education);
        }
      
       if(event.target.id === "degree")
       {
        var education = [...this.state.education];
        const educationid = this.state.educationid;
        education[educationid].degree = event.target.value;
        console.log('education',education);
        this.setState({education:education});
        console.log(this.state.education);
       } 

       if(event.target.id === "fromyear")
       {
        var education = [...this.state.education];
        const educationid = this.state.educationid;
        education[educationid].fromyear = event.target.value;
        console.log('education',education);
        this.setState({education:education});
        console.log(this.state.education);
       } 


       if(event.target.id === "toyear")
       {
        var education = [...this.state.education];
            const educationid = this.state.educationid;
            education[educationid].toyear = event.target.value;
            console.log('education',education);
            this.setState({education:education});
            console.log(this.state.education);
       } 


    }
   /*  saveexperiencechanges=()=>{




    } */

   /*  savechanges=(e)=>{
        e.preventDefault(); */
        
        /* axios.post('url',data).then(

        ) */
        //this.setState({experience:experience});

   /*  } */





    //For education function ends

    
    render(){



        //personal detail section start

        var modalpersonaldetails = (
            <div>
                <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
          edit Personal Details
        </button>
        
        
        <div class="modal fade modalStyle" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modalStyle" role="document"  width= "750px"
  margin="auto">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Personal Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <label  className="grey-text">First Name</label>
              <input
                                label="fname"
                                icon="fa-map-pin"
                                group
                                value={this.state.fname}
                                type="text"
                                id="fname"
                                validate
                                error="wrong"
                                success="right"
                                onChange={this.handlefieldchanges}
                              />

                               <label  className="grey-text">Last Name</label>
              <input
                                label="lname"
                                icon="fa-map-pin"
                                group
                                value={this.state.lname}
                                type="text"
                                id="lname"
                                validate
                                error="wrong"
                                success="right"
                                onChange={this.handlefieldchanges}
                              />


                  <label  className="grey-text">Current Position</label>
              <input
                                label="currentposition"
                                icon="fa-map-pin"
                                group
                                value={this.state.company}
                                type="text"
                                id="company"
                                validate
                                error="wrong"
                                success="right"
                                onChange={this.handlefieldchanges}
                              />   

                     <label  className="grey-text">Country/Region</label>
              <input
                                label="country"
                                icon="fa-map-pin"
                                group
                                value={this.state.city}
                                type="text"
                                id="city"
                                validate
                                error="wrong"
                                success="right"
                                onChange={this.handlefieldchanges}
                              />  

                                  <label  className="grey-text">About Me</label>
              <input
                                label="aboutMe"
                                icon="fa-map-pin"
                                group
                                value={this.state.aboutMe}
                                type="text"
                                id="aboutMe"
                                validate
                                error="wrong"
                                success="right"
                                onChange={this.handlefieldchanges}
                              />                   
             
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={this.savepersonaldetailschanges}>Save changes</button>
              </div>
            </div>
          </div>
        </div></div>
                </div>
        );

        //personal detail section end
//**************************************************************************** */
        //experience section starts


        
        //
        var addexperiencemodalvar = <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#basicExampleModalExperienceADD"  onClick={this.handleaddexperiencemodal}>+</button>



        if(this.state.showmodaladdexperience === true ){

            var modaladdexperience = (
    
                <div>
                <div>{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModalExperience">
               edit Personal Details
             </button>    */}  
             
             
             <div class="modal fade modalStyle" id="basicExampleModalExperienceADD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-lg modalStyle" role="document"  width= "750px"
         margin="auto">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">Experience</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <div class="modal-body">
                   <label  className="grey-text">designation</label>
                   <input
                                     label="designation"
                                     icon="fa-map-pin"
                                     placeholder="your designation"
                                     id="addtestdesignation"
                                     group
                                     type="text"
                                     
                                     validate
                                     error="wrong"
                                     success="right"
                                     onChange={this.handlefieldchanges}
                                   />
         
                                    <label  className="grey-text">companyname</label>
                   <input
                                     label="companyname"
                                     icon="fa-map-pin"
                                     group
                                    
                                     type="text"
                                     placeholder="your workplace's name"
                                     id="addtestcompanyname"
                                     validate
                                     error="wrong"
                                     success="right"
                                     onChange={this.handlefieldchanges}
                                   />
         
         
                       <label  className="grey-text">Location</label>
                   <input
                                     label="Location"
                                     icon="fa-map-pin"
                                     group
                                     
                                     type="text"
                                     placeholder="your location's place"
                                     id="addtestlocation"
                                     validate
                                     error="wrong"
                                     success="right"
                                     onChange={this.handlefieldchanges}
                                   />   
         
                          <label  className="grey-text">Responsibility</label>
                   <input
                                     label="Responsibility"
                                     icon="fa-map-pin"
                                     group
                                    
                                     type="text"
                                     placeholder="your role"
                                     id="addtestresponsibility"
                                     validate
                                     error="wrong"
                                     success="right"
                                     onChange={this.handlefieldchanges}
                                   />                   
                  
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                     <button type="button" class="btn btn-primary" onClick={this.handleaddtoexperiencearray}>Add</button>
                   </div>
                 </div>
               </div>
             </div></div>
                     </div>
    
            );
    
        }
    






        var it = -1;
        const test1 = this.state.test;
        console.log('tempexp is',test1);
        const experiencevar = test1.map((experiencevalues,index)=>{
            it = it+1;
            var id=0;
            return(
            <div>
                 <span className="job-logo-container col-lg-2">
                       <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                </span>
                <h5>{experiencevalues.designation}</h5>
                <h5>{experiencevalues.companyname}</h5>
                <h5>{experiencevalues.location}</h5>
                <h5>{experiencevalues.responsibility}</h5>
                <button type="button" class="btn btn-primary"   onClick={() => this.handledeleteexperiencemodal(index)}>delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#basicExampleModalExperience" onClick={() => this.handleeditexperiencemodal(index)}>edit</button>
            </div>
            )

        }
    )

    
    if(this.state.showmodaleditexperience === true ){
        console.log("tesst is value",this.state.test);
        var modaleditexperience = (

            <div>
       <div>{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModalExperience">
      edit Personal Details
    </button>    */}  
    
    
    <div class="modal fade modalStyle" id="basicExampleModalExperience" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modalStyle" role="document"  width= "750px"
margin="auto">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Experience</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <label  className="grey-text">designation</label>
          <input
                            label="designation"
                            icon="fa-map-pin"
                            value={this.state.experience[this.state.experienceid].designation}
                            id="designation"
                            group
                            type="text"
                            
                            validate
                            error="wrong"
                            success="right"
                            onChange={this.handlefieldchangesexperience}
                          />

                           <label  className="grey-text">companyname</label>
          <input
                            label="companyname"
                            icon="fa-map-pin"
                            group
                            value={this.state.experience[this.state.experienceid].companyname}
                            type="text"
                            id="companyname"
                            validate
                            error="wrong"
                            success="right"
                            onChange={this.handlefieldchangesexperience}
                          />


              <label  className="grey-text">Location</label>
          <input
                            label="Location"
                            icon="fa-map-pin"
                            group
                            value={this.state.experience[this.state.experienceid].location}
                            type="text"
                            id="location"
                            validate
                            error="wrong"
                            success="right"
                            onChange={this.handlefieldchangesexperience}
                          />   

                 <label  className="grey-text">Responsibility</label>
          <input
                            label="Responsibility"
                            icon="fa-map-pin"
                            group
                            value={this.state.experience[this.state.experienceid].responsibility}
                            type="text"
                            id="responsibility"
                            validate
                            error="wrong"
                            success="right"
                            onChange={this.handlefieldchangesexperience}
                          />                   
         
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.canceleditexperiencechanges}>Close</button>
            <button type="button" class="btn btn-primary" onClick={this.saveeditexperiencechanges}>Save changes</button>
          </div>
        </div>
      </div>
    </div></div>
            </div>
    );
}




        




        //experience section end
//**************************************************************************** */

        //education section start

      /*   let educationvar = this.state.education.map(educationvalues=>{
            return(
            <div>
                
                <h5>{educationvalues.universityname}</h5>
                <h5>{educationvalues.year}</h5>
                <h5>{educationvalues.location}</h5>
                <h5>{educationvalues.degreefield}</h5>
            </div>
            )
        }
    ) */
       // var modaleducation =();

     




       var addeducationmodalvar = <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#basicExampleModalEducationADD"  onClick={this.handleaddeducationmodal}>+</button>



       if(this.state.showmodaladdeducation === true ){

           var modaladdeducation = (
   
               <div>
               <div>{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModalExperience">
              edit Personal Details
            </button>    */}  
            
            
            <div class="modal fade modalStyle" id="basicExampleModalEducationADD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modalStyle" role="document"  width= "750px"
        margin="auto">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Education</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <label  className="grey-text"></label>
                  <input
                                    label="school"
                                    icon="fa-map-pin"
                                    placeholder="Ex. sjsu"
                                    id="addschool"
                                    group
                                    type="text"
                                    
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handlefieldchanges}
                                  />
        
                                   <label  className="grey-text">Degree</label>
                  <input
                                    label="degree"
                                    icon="fa-map-pin"
                                    group
                                   
                                    type="text"
                                    placeholder="Ex. Bachelor's"
                                    id="adddegree"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handlefieldchanges}
                                  />
        
        
                      <label  className="grey-text">From Year</label>
                  <input
                                    label="fromyear"
                                    icon="fa-map-pin"
                                    group
                                    
                                    type="text"
                                    placeholder="Year"
                                    id="addfromyear"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handlefieldchanges}
                                  />   
        
                         <label  className="grey-text">To Year</label>
                  <input
                                    label="toyear"
                                    icon="fa-map-pin"
                                    group
                                   
                                    type="text"
                                    placeholder="Year"
                                    id="addtoyear"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handlefieldchanges}
                                  />                   
                 
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={this.handleaddtoeducationarray}>Add</button>
                  </div>
                </div>
              </div>
            </div></div>
                    </div>
   
           );
   
       }
   






       var it1 = -1;
       let educationvar = this.state.education.map((educationvalues,index)=>{
           it1 = it1+1;
           var id1=0;
           return(
           <div>
                <span className="job-logo-container col-lg-2">
                      <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
               </span>
               <h5>{educationvalues.school}</h5>
               <h5>{educationvalues.degree}</h5>
               <h5>{educationvalues.fromyear}</h5>
               <h5>{educationvalues.toyear}</h5>
               <button type="button" class="btn btn-primary" value={it1}  onClick={() => this.handledeleteeducationmodal(index)}>delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button type="button" class="btn btn-primary" value={it1} data-toggle="modal" data-target="#basicExampleModalEducation" onClick={() => this.handleediteducationmodal(index)}>edit</button>
           </div>
           )
           
       }
   )

   
   if(this.state.showmodalediteducation === true ){
       var modalediteducation = (

           <div>
      <div>{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModalExperience">
     edit Personal Details
   </button>    */}  
   
   
   <div class="modal fade modalStyle" id="basicExampleModalEducation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-lg modalStyle" role="document"  width= "750px"
margin="auto">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Education</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
         <label  className="grey-text">school</label>
         <input
                           label="school"
                           icon="fa-map-pin"
                           value={this.state.education[this.state.educationid].school}
                           id="school"
                           group
                           type="text"
                           
                           validate
                           error="wrong"
                           success="right"
                           onChange={this.handlefieldchangesducation}
                         />

                          <label  className="grey-text">degree</label>
         <input
                           label="degree"
                           icon="fa-map-pin"
                           group
                           value={this.state.education[this.state.educationid].degree}
                           type="text"
                           id="degree"
                           validate
                           error="wrong"
                           success="right"
                           onChange={this.handlefieldchangeseducation}
                         />


             <label  className="grey-text">From Year</label>
         <input
                           label="fromyear"
                           icon="fa-map-pin"
                           group
                           value={this.state.education[this.state.educationid].fromyear}
                           type="text"
                           id="fromyear"
                           validate
                           error="wrong"
                           success="right"
                           onChange={this.handlefieldchangeseducation}
                         />   

                <label  className="grey-text">To Year</label>
         <input
                           label="toyear"
                           icon="fa-map-pin"
                           group
                           value={this.state.education[this.state.educationid].toyear}
                           type="text"
                           id="toyear"
                           validate
                           error="wrong"
                           success="right"
                           onChange={this.handlefieldchangeseducation}
                         />                   
        
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
           <button type="button" class="btn btn-primary" onclick={this.saveeducationchanges}>Save changes</button>
         </div>
       </div>
     </div>
   </div></div>
           </div>
   );
}







        //education section end



//**************************************************************************** */




        //skills section for render start
       
        //iterate to display skills
        let skillsvar = this.state.skills.map(skillvalues => {
          
            return (  
                <div>
                
          <h5 >{skillvalues}</h5>
              <hr></hr>
    </div>)}); 


    var modalskills = (
        <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModalskills">
          Add skills
        </button>
        
        
        <div class="modal fade modalStyle" id="basicExampleModalskills" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modalStyle" role="document"  width= "750px"
  margin="auto">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Skills and Endorsement</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              {/*code to iterate over the string of skills again*/}
              <label  className="grey-text">Skills</label>
              <input
                                label="fname"
                                icon="fa-map-pin"
                                value={this.state.skillstr}
                                group
                                type="text"
                                id="skillstr"
                                validate
                                error="wrong"
                                success="right"
                                onChange={this.handlefieldchanges}
                              />
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary" onClick={this.saveskillschanges}>Save changes</button>
              </div>
              </div>
              </div>
              </div>
              </div>    )

    





        return(
            <div>
                <Header />
                <div className = "homepage">
                    <div className="col-lg-9 border floatHome">
                    <img src = "https://coverfiles.alphacoders.com/498/49849.jpg"  width="100%" height="100%"/>
                    <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height="100" className="ProfileImage"/>
                        <div>
                            <p className="profileDescription">{this.state.fname1}&nbsp;{this.state.lname1}</p>
                            <p className="profileDescription1">{this.state.company1}</p>
                            <div> 
                            <p className="">{this.state.city1}</p>
                            <p className="">{this.state.aboutMe1}</p>
                            <p className="">{modalpersonaldetails}</p>
                            </div>
                        </div>
                        <hr/>
                    </div>




                    <div className="col-lg-9 border floatHome">
                      <h3>Experience</h3>
                      <p className=""></p>
                        <div className="ml-4 mt-5  col-lg-9">
                            <div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                   
                                
                                    <span className="col-lg-9">
                                    <div>{addexperiencemodalvar}</div>
                                    <div>{modaladdexperience}</div>
                                    <div>{experiencevar}</div>
                                    <div>{modaleditexperience}</div>
                                       {/*  <div className=""><b>Web Development Intern</b><br /></div>
                                        <div className="">Adobe</div>
                                        <div className="">2 yrs 3 mos </div>
                                        <div></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div> */}
                                    </span>
                                </div>
                                </div>
                                <div>
                                <div className="job-result-data p-3 mt-2 mb-2 row border">
                                    {/* <span className="job-logo-container col-lg-2">
                                        <img className="job-logo" src="https://media.licdn.com/dms/image/C4D0BAQHcZzoBjmYdvA/company-logo_200_200/0?e=1550102400&v=beta&t=oXB0dGr7pUu2H-c8gPeoMDbl2cVIMSMXInCOZ74fjJc" alt="company-logo" />
                                    </span> */}
                                    
                                </div>
                                </div>
                        <hr/>
                    </div>
                    </div>



                    <div className="col-lg-9 border floatHome">
                    <h3>Education</h3>
                    <p className=""></p>
                      <div className="ml-4 mt-5  col-lg-9">
                          <div>
                              <div className="job-result-data p-3 mt-2 mb-2 row border">
                                  <span className="job-logo-container col-lg-2">
                                      <img className="job-logo" src="https://28dvez1wnqjyd37ed3lq71f6-wpengine.netdna-ssl.com/wp-content/themes/twenty-seventeen-child/assets/images/sjsu-logo-gold.png" alt="company-logo" />
                                  </span>
                                  <span className="col-lg-9">
                                    <div>{addeducationmodalvar}</div>
                                    <div>{modaladdeducation}</div>
                                    <div>{educationvar}</div>
                                    <div>{modalediteducation}</div>
                                       {/*  <div className=""><b>Web Development Intern</b><br /></div>
                                        <div className="">Adobe</div>
                                        <div className="">2 yrs 3 mos </div>
                                        <div></div>
                                        <div>San Jose, CA</div>
                                        <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div> */}
                                    </span>
                              </div>
                              </div>
                              <div>
                              <div className="job-result-data p-3 mt-2 mb-2 row border">
                                 {/*  <span className="job-logo-container col-lg-2">
                                      <img className="job-logo" src="https://28dvez1wnqjyd37ed3lq71f6-wpengine.netdna-ssl.com/wp-content/themes/twenty-seventeen-child/assets/images/sjsu-logo-gold.png" alt="company-logo" />
                                  </span>
                                  <span className="col-lg-9">
                                  <div className=""><b>San Jose State 
                                          university</b><br /></div>
                                      <div className="">Master of Science - Computer Software Engineering</div>
                                      <div className="">2018-2020 </div>
                                      <div></div>
                                      <div>San Jose, CA</div>
                                      <div>Building on top of the data layer, the team is responsible for delivering a rationalized set of core services. Discover what our </div>
                                  </span> */}
                              </div>
                              </div>    
                      <hr/>
                  </div>
                  </div>
                  <div className="col-lg-9 border floatHome">
                  <h3>Skills</h3>
                  <p className="">{modalskills}</p>
                      <div className="ml-4 mt-5  col-lg-9">
                          <div>
                              <div className="job-result-data p-3 mt-2 mb-2 row border">
            
                                  <span className="col-lg-9">
                                      {/* <div className=""><b>Programming</b><br /></div>
                                      <hr/>
                                      <div className=""><b>C</b><br /></div>
                                      <hr/>
                                      <div className=""><b>C++</b><br /></div>
                                      <hr/>
                                      <div className=""><b>Python</b><br /></div>
                                      <hr/>
                                      <div className=""><b>JavaScript</b><br /></div>
                                      <hr/> */}
                                      {skillsvar}
                                  </span>
                              </div>
                              </div>
                      <hr/>
                  </div>
                  </div>
                  
                 
                    </div>
                    </div>
        );
    }
}

export default Profile;