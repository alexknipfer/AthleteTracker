import React from 'react';

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
