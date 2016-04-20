import React from 'react';
import CommonNav from './CommonNav.js';
import CoachNav from './CoachNav.js';
import AdminNav from './AdminNav.js';
import AdmissionsNav from './AdmissionsNav.js';

export default class Navigation extends React.Component{

  render() {
    if (Roles.userIsInRole(this.props.currentUser, "admin")) {
      return (
        <AdminNav userName={this.props.currentUser.username}/>
      );
    }

    else if (Roles.userIsInRole(this.props.currentUser, "coach")) {
      return (
        <CoachNav userName={this.props.currentUser.username}/>
      );
    }

    else if (Roles.userIsInRole(this.props.currentUser, "admissions")) {
      return (
          <AdmissionsNav userName={this.props.currentUser.username} /> 
      );
    }

    if(!Meteor.user()) {
      return (
        <CommonNav />
      );
    }
  }
}
