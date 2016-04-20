import React from 'react';
import Alert from 'react-s-alert';
import Loading from '../../../common/components/Loading/Loading.js';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';

export default class EditStudent extends React.Component{

  handleSubmit(e){
    e.preventDefault();
    const studentId = this.props.currentStudent._id;
    const newGradYear = this.refs.editGradYear.value;
    const newGPA = this.refs.editGPA.value;
    const newACT = this.refs.editACT.value;
    const newDOB = this.refs.editDOB.value;
    const newPhoneNumber = this.refs.editPhoneNumber.value;
    const newEmail = this.refs.editEmail.value;
    const newCity = this.refs.editCity.value;
    const newState = this.refs.editState.value;
    const newHeight = this.refs.editHeight.value;
    const newWeight = this.refs.editWeight.value;
    const newHalfSpeed = this.refs.editHalfSpeed.value;
    const newFullSpeed = this.refs.editFullSpeed.value;
    const newDominantHand = this.refs.editDominantHand.value;
    const newPosition = this.refs.editPosition.value;

    Meteor.call("editStudent", {studentId, newGradYear, newGPA, newACT, newDOB, newPhoneNumber, newEmail, newCity, newState, newHeight, newWeight, newHalfSpeed, newFullSpeed, newDominantHand, newPosition});
    console.log("updated successful");
    Alert.success('Updated Athlete Successfully!', {
      position: 'bottom',
      effect: 'stackslide',
      timeout: 3000
    });
    FlowRouter.go('/manageStudents');
  }

  render(){
    if(this.props.loading) {
      return (
        <Loading />
      )
    } else {
      if(Roles.userIsInRole(Meteor.userId(), "coach")){
        return (
          <div className="row">
            <div className="col s12">
              <div className="card edit-padding">
                <a href="/manageStudents" className="right">
                  Return Home
                </a>
                <div className="card-content black-text">
                  <span className="card-title">
                    Edit Athlete
                  </span>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                      <div className="col s12 m6 l6">
                        <label for="grad_Year">
                          Graduation Year:
                        </label>
                        <input
                          type="text"
                          id="grad_Year"
                          defaultValue={this.props.currentStudent.gradYear}
                          ref="editGradYear" />
                      </div>

                      <div className="col s12 m6 l6">
                        <label for="edit_gpa">GPA:</label>
                        <input
                          type="text"
                          id="edit_gpa"
                          defaultValue={this.props.currentStudent.gpa}
                          ref="editGPA" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_ACT">ACT:</label>
                        <input
                          type="text"
                          id="edit_ACT"
                          defaultValue={this.props.currentStudent.act}
                          ref="editACT" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_DOB">
                          Date of Birth:
                        </label>
                        <input
                          type="text"
                          id="edit_DOB"
                          defaultValue={this.props.currentStudent.dob}
                          ref="editDOB" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Phone">
                          Phone Number:
                        </label>
                        <input
                          type="text"
                          id="edit_Phone"
                          defaultValue={this.props.currentStudent.phoneNumber}
                          ref="editPhoneNumber" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Email">Email:</label>
                        <input
                          type="text"
                          id="edit_Email"
                          defaultValue={this.props.currentStudent.email}
                          ref="editEmail" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_City">City:</label>
                        <input
                          type="text"
                          id="edit_City"
                          defaultValue={this.props.currentStudent.city}
                          ref="editCity" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_State">State:</label>
                        <input
                          type="text"
                          id="edit_State"
                          defaultValue={this.props.currentStudent.state}
                          ref="editState" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Height">Height:</label>
                        <input
                          type="text"
                          id="edit_Height"
                          defaultValue={this.props.currentStudent.height}
                          ref="editHeight" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Weight">Weight:</label>
                        <input
                          type="text"
                          id="edit_Weight"
                          defaultValue={this.props.currentStudent.weight}
                          ref="editWeight" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Half">
                          50 Fr:
                        </label>
                        <input
                          type="text"
                          id="edit_Half"
                          defaultValue={this.props.currentStudent.speedHalf}
                          ref="editHalfSpeed" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Full">
                          100 Fr:
                        </label>
                        <input
                          type="text"
                          id="edit_Full"
                          defaultValue={this.props.currentStudent.speedFull}
                          ref="editFullSpeed" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Hand">
                          Dominant Hand:
                        </label>
                        <input
                          type="text"
                          id="edit_Hand"
                          defaultValue={this.props.currentStudent.handOrientation}
                          ref="editDominantHand" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12">
                        <label for="edit_Position">Position:</label>
                        <input
                          type="text"
                          id="edit_Position"
                          defaultValue={this.props.currentStudent.position}
                          ref="editPosition" />
                      </div>
                    </div>

                    <button
                      className="btn waves-effect login grey"
                      type="submit">
                      Submit Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else{
        return(
          <Unauthorized />
        );
      }
    }
  }
}
