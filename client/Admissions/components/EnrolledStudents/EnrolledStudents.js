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
      return (
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "admissions")) {
      console.log("HELLO");
      return (
        <div>
          <h1>Admissions Student Page</h1>
        </div>
      );
    }

  }
}
