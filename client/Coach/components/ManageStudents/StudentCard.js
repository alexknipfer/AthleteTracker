import React from 'react';

export default class StudentCard extends React.Component{
  removeStudent(id, firstname, lastname) {
    let previousWindowKeyDown = window.onkeydown;
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover " + firstname + " " + lastname + "!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if(isConfirm){
          swal('Deleted!', 'User has been deleted.', 'success');
          Meteor.call("removeStudent", id,firstname, lastname);
        }
        else{
          swal('Cancelled', 'Your user is safe now.', 'error');
        }
      });
    }

    render() {
      return (
        <div>
      <div className="row">
      {this.props.studentData.map((student) =>{
        return (
          <div className="col s12 m6 l4" key={student._id}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/davemiller.jpg" />
              </div>
              <div className="card-content">
              <a href="#"><i className="material-icons red-text" onClick={this.removeStudent.bind(this, student._id, student.firstname, student.lastname)}>clear</i></a>
                <span className="card-title activator grey-text text-darken-4">{student.firstname} {student.lastname}<i className="material-icons right">reorder</i></span>
                <p><a href="/email">Email Student</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                <ul>
                  <li>Graduation Year: {student.gradYear}</li>
                  <li>GPA: {student.gpa}</li>
                  <li>ACT: {student.act}</li>
                  <li>Date of Birth: {student.dob}</li>
                  <li>Phone Number: {student.phoneNumber}</li>
                  <li>Email: {student.email}</li>
                  <li>City: {student.city}</li>
                  <li>State: {student.state}</li>
                  <li>Height: {student.height}</li>
                  <li>Weight: {student.weight}</li>
                  <li>50 Fr: {student.speedHalf}</li>
                  <li>100 Fr: {student.speedFull}</li>
                  <li>Dominate Hand: {student.handOrientation}</li>
                  <li>Position: {student.position}</li>
                </ul>

              </div>

            </div>
          </div>
          );
        })}
        </div>
      </div>
      );
    }
}
