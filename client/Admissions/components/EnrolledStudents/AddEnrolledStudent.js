import React from 'react';
import Alert from 'react-s-alert';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import Loading from '../../../common/components/Loading/Loading.js';

export default class AddEnrolledStudent extends React.Component{
  handleSubmit(e){
    e.preventDefault();

    const firstname = this.refs.firstname.value;
    const lastname = this.refs.lastname.value;
    const studentID = this.refs.studentID.value;


    Meteor.call("AddEnrolledStudentData", {firstname, lastname, studentID}, (error) => {
      if(error){
        Alert.error(error.reason, {
          position: 'bottom',
          effect: 'stackslide',
          timeout: 3000
        });
      }

      else{
        FlowRouter.go("/enrolledStudents");
        Alert.success("Student Added Successfully!", {
          position: 'bottom',
          effect: 'stackslide',
          timeout: 3000
        });
      }
    });
  }


  render(){
    if (this.props.loading) {
      return (
        <Loading />
      );
    }

    else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "admissions")){
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
                    <div className="col s12 m12 l12">
                      <input
                        type="text"
                        ref="firstname"
                        className="validate"
                        placeholder="First Name"
                        minLength={2}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m12 l12">
                      <input
                        type="text"
                        ref="lastname"
                        className="validate"
                        placeholder="Last Name"
                        minLength={1}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m12 l12">
                      <input
                        type="text"
                        ref="studentID"
                        className="validate"
                        placeholder="Student ID"
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
