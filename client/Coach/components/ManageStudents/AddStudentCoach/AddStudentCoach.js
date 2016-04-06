import React from 'react';

AddStudentCoach = React.createClass({
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
          Bert.alert(error.reason, "danger");
        }

        else{
          FlowRouter.go("/manageStudents");
          Bert.alert( 'Student added successfully!', 'success', 'growl-top-right' );
        }
      });

  },

  render(){
    if(Roles.userIsInRole(Meteor.userId(), "coach")){
      return(
        <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-content black-text">
              <span className="card-title">Add Recruit</span>

              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col s12 m4 l4">
                    <input type="text" ref="firstname" className="validate" placeholder="First Name" minLength={2} required />
                  </div>

                  <div className="col s12 m4 l4">
                    <input type="text" ref="lastname" className="validate" placeholder="Last Name" minLength={1} required />
                  </div>

                  <div className="col s12 m4 l4">
                    <input type="text" ref="gradYear" className="validate" placeholder="Grad Year" minLength={4} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3 l3">
                    <input type="text" ref="gpa" className="validate" placeholder="GPA" minLength={3} required />
                  </div>

                  <div className="col s12 m3 l3">
                    <input type="text" ref="act" className="validate" placeholder="ACT / SAT" minLength={1} required />
                  </div>

                  <div className="col s12 m3 l3">
                    <input type="text" ref="dob" className="validate" placeholder="Date of Birth" minLength={1} required />
                  </div>

                  <div className="col s12 m3 l3">
                    <input type="text" ref="phoneNumber" className="validate" placeholder="Phone Number" minLength={1} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m4 l4">
                    <input type="text" ref="email" className="validate" placeholder="Email" minLength={1} required />
                  </div>

                  <div className="col s12 m4 l4">
                    <input type="text" ref="city" className="validate" placeholder="City" minLength={1} required />
                  </div>

                  <div className="col s12 m4 l4">
                    <input type="text" ref="state" className="validate" placeholder="State" minLength={1} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3 l3">
                    <input type="text" ref="height" className="validate" placeholder="Height" minLength={1} required />
                  </div>

                  <div className="col s12 m3 l3">
                    <input type="text" ref="weight" className="validate" placeholder="Weight" minLength={1} required />
                  </div>

                  <div className="col s12 m3 l3">
                    <input type="text" ref="speedHalf" className="validate" placeholder="50 Fr" minLength={1} required />
                  </div>

                  <div className="col s12 m3 l3">
                    <input type="text" ref="speedFull" className="validate" placeholder="100 Fr" minLength={1} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m6 l6">
                    <input type="text" ref="handOrientation" className="validate" placeholder="Dominate Hand" minLength={1} required />
                  </div>

                  <div className="col s12 m6 l6">
                    <input type="text" ref="position" className="validate" placeholder="Position" minLength={1} required />
                  </div>
                </div>

                <button className="btn waves-effect login grey" type="submit">Add Athlete</button>

              </form>
            </div>
          </div>
        </div>
      </div>
      );
    }

    else{
      return(<Unauthorized />);
    }
  }
});
