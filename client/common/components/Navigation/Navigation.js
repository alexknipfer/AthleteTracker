import React from 'react';
import CommonNav from '../Navigation/CommonNav.js';
import CaochNav from '../Navigation/CoachNav.js';
import AdminNav from '../../containers/AdminNavContainer.js';

Navigation = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    const handle = Meteor.subscribe("currentUser");

    return{
      currentUser: Meteor.users.findOne({
        _id: Meteor.userId()
      })
    };
  },

  render() {
    if (Roles.userIsInRole(this.data.currentUser, "admin")) {
      return (
        <AdminNav />
      );
    }

    if (Roles.userIsInRole(this.data.currentUser, "coach")) {
      return (
        <CoachNav />
      );
    }

    if(!Meteor.user()) {
      return (
        <CommonNav />
      );
    }
  }
});
