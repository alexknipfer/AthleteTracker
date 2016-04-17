import React from 'react';
import Loading from '../../../common/components/Loading/Loading.js';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import AddEnrolledStudent from './AddEnrolledStudent.js';

export default class EnrolledStudents extends React.Component{

  render() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    }

    else if (Meteor.loggingIn()) {
      console.log("LOGGIN IN");
      return (
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "admissions")) {
      return (
        <div>
          <h1>Admissions Student Page</h1>
          <div className="row">
            <div col="s12 m4 l4">
              <a
                className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1"
                href="/addEnrolledStudent">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <Unauthorized />
      );
    }
  }
}
