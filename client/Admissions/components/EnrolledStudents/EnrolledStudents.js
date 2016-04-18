import React from 'react';
import Loading from '../../../common/components/Loading/Loading.js';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import AddEnrolledStudent from './AddEnrolledStudent.js';
import EnrolledStudentCard from './EnrolledStudentCard.js';
import NoEnrolledStudents from './NoEnrolledStudents.js'

export default class EnrolledStudents extends React.Component{

  render() {
    if(this.props.loading){
      return(
        <Loading />
      );
    }

    else if(Meteor.loggingIn()){
      return(
        <Loading />
      )
    }

    else if(Roles.userIsInRole(Meteor.userId(), "admissions")) {
      return (
        <div>
          <div className="row">
            <div col="s12 m4 l4">
              <a
                className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1"
                href="/addEnrolledStudent">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>

        {(() => {
          if(this.props.enrolledStudentCount == 0){
            return(
              <NoEnrolledStudents />
            );
          }

          else{
            return(
                <EnrolledStudentCard enrolledStudentData={this.props.myEnrolledStudents} />
            );
          }
        })()}
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
