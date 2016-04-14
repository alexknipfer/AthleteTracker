import React from 'react';
import Alert from 'react-s-alert';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';

export default class AddStudentCoach extends React.Component{
  handleSubmit(e){
    e.preventDefault();

    const firstname = this.refs.firstname.value;
    const lastname = this.refs.lastname.value;
    const gradYear = this.refs.gradYear.value;
    const gpa = this.refs.gpa.value;
    const act = this.refs.act.value;
    const dob = this.refs.dob.value;
    const phoneNumber = this.refs.phoneNumber.value;
    const email = this.refs.email.value;
    const city = this.refs.city.value;
    const state = this.refs.state.value;
    const height = this.refs.height.value;
    const weight = this.refs.weight.value;
    const speedHalf = this.refs.speedHalf.value;
    const speedFull = this.refs.speedFull.value;
    const handOrientation = this.refs.handOrientation.value;
    const position = this.refs.position.value;

    Meteor.call("AddStudentData", {firstname, lastname, gradYear, gpa, act, dob, phoneNumber, email, city, state, height, weight, speedHalf, speedFull, handOrientation, position}, (error) => {
      if(error){
        Alert.error(error.reason, {
          position: 'bottom',
          effect: 'stackslide',
          timeout: 3000
        });
      }

      else{
        FlowRouter.go("/manageStudents");
        Alert.success("Student Added Successfully!", {
          position: 'bottom',
          effect: 'stackslide',
          timeout: 3000
        });
      }
    });
  }

  componentDidMount(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100, // Creates a dropdown of 15 years to control year
      min: new Date(1940,1,1),
      //max: new Date(2016,7,14)
      max: true
    });
  }

  render(){
    if(Roles.userIsInRole(Meteor.userId(), "coach")){
      return(
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content black-text">
                <span className="card-title">
                  Add Recruit
                </span>

                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="row">
                    <div className="col s12 m4 l4">
                      <input
                        type="text"
                        ref="firstname"
                        className="validate"
                        placeholder="First Name"
                        minLength={2}
                        required />
                    </div>

                    <div className="col s12 m4 l4">
                      <input
                        type="text"
                        ref="lastname"
                        className="validate"
                        placeholder="Last Name"
                        minLength={1}
                        required />
                    </div>

                    <div className="col s12 m4 l4">
                      <input
                        type="text"
                        ref="gradYear"
                        className="validate"
                        placeholder="Grad Year (Optional)"
                        minLength={4}
                        />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m3 l3">
                      <input
                        type="text"
                        ref="gpa"
                        className="validate"
                        placeholder="GPA (Optional)"
                        minLength={3}
                        />
                    </div>

                    <div className="col s12 m3 l3">
                      <input
                        type="text"
                        ref="act"
                        className="validate"
                        placeholder="ACT / SAT (Optional)"
                        minLength={1}
                        />
                    </div>

                    <div className="col s12 m3 l3">
                      <input
                        type="date"
                        ref="dob"
                        className="datepicker"
                        placeholder="Date of Birth"
                        required />
                    </div>

                    <div className="col s12 m3 l3">
                      <input
                        type="text"
                        ref="phoneNumber"
                        className="validate"
                        placeholder="Phone Number (Optional)"
                        minLength={1}
                        />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m4 l4">
                      <input
                        type="text"
                        ref="email"
                        className="validate"
                        placeholder="Email"
                        minLength={1}
                        required />
                    </div>

                    <div className="col s12 m4 l4">
                      <input
                        type="text"
                        ref="city"
                        className="validate"
                        placeholder="City"
                        minLength={1}
                        required />
                    </div>

                    <div className="col s12 m4 l4">
                      <input
                        type="text"
                        ref="state"
                        className="validate"
                        placeholder="State"
                        minLength={1}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m3 l3">
                      <input
                        type="text"
                        ref="height"
                        className="validate"
                        placeholder="Height"
                        minLength={1}
                        required />
                    </div>

                    <div className="col s12 m3 l3">
                      <input
                        type="text"
                        ref="weight"
                        className="validate"
                        placeholder="Weight"
                        minLength={1}
                        required />
                    </div>

                    <div className="col s12 m3 l3">
                      <input
                        type="text"
                        ref="speedHalf"
                        className="validate"
                        placeholder="50 Fr (Optional)"
                        minLength={1}
                        />
                    </div>

                    <div className="col s12 m3 l3">
                      <input
                        type="text"
                        ref="speedFull"
                        className="validate"
                        placeholder="100 Fr (Optional)"
                        minLength={1}
                        />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m6 l6">
                      <input
                        type="text"
                        ref="handOrientation"
                        className="validate"
                        placeholder="Dominate Hand"
                        minLength={1}
                        required />
                    </div>

                    <div className="col s12 m6 l6">
                      <input
                        type="text"
                        ref="position"
                        className="validate"
                        placeholder="Position"
                        minLength={1}
                        required />
                    </div>
                  </div>

                  <button
                    className="btn waves-effect login grey"
                    type="submit">
                    Add Athlete
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
