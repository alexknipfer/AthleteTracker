import React from 'react';

export default class SchoolCard extends React.Component{

  removeSchool(id, schoolName, schoolPhone, schoolCoach) {
    let previousWindowKeyDown = window.onkeydown;
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover " + schoolName + "!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if(isConfirm){
          swal('Deleted!', 'User has been deleted.', 'success');
          Meteor.call("removeSchool", id);
        }
        else{
          swal('Cancelled', 'Your user is safe now.', 'error');
        }
      });
    }

  render(){
    return(
      <div>
        {this.props.schoolData.map((schools) =>{
          return (
            
            <li
              className="collection-item avatar"
              key={schools._id}>
              <div>
            <img className="activator" src="images/school4.jpg "/>
        
               <br>
               </br>
            </div>
              
              <span className="title">
               
                <strong>
                  {schools.schoolName}
                </strong>
                <a href="#">
                  <i
                    className="material-icons red-text right"
                    onClick={this.removeSchool.bind(this, schools._id, schools.schoolName, schools.schoolPhone, schools.schoolCoach)}>close</i>
                </a>
              </span>

              <p>
                Phone Number: {schools.schoolPhone}
                <br>
                </br>
                Coach Name:  {schools.schoolCoach}
                <br>
                </br>
                Address:     {schools.schoolAddress}
                <br>
                </br>
                {schools.schoolCity}, {schools.schoolState}
                <br>
                </br>
                
              </p>
              <br>
              </br>
            </li>
          );
          
        })}
      </div>
    );
  }
}
