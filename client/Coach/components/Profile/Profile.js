
import React from 'react';

Profile = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("currentUser");

    return{
      currentUser: Meteor.users.findOne({
        _id: Meteor.userId()
      })
    };
  },

  updateProfile(){
    const firstname = this.refs.firstname.value;
    Meteor.call("updateProfile", {firstname});
  },

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    }

    else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    }

    else if (Roles.userIsInRole(Meteor.userId(), "coach")) {
      return (
        <div className="row">
          <div className="col s12 m8 l6 offset-l3 offset-m2">
            <div className="card login-padding">
              <div className="card-content black-text">
                <span className="card-title">My Profile</span>
                <table>
                <tbody>
                  <tr>
                    <td><b>Username: </b></td>
                    <td><input disabled defaultValue={this.data.currentUser.username} /></td>
                  </tr>
                  <tr>
                    <td><b>Firstname:</b></td>
                    <td><input ref="firstname" onChange={this.updateProfile} defaultValue={this.data.currentUser.firstname} /></td>
                  </tr>
                  <tr>
                    <td><b>Lastname:</b></td>
                    <td>{this.data.currentUser.lastname}</td>
                  </tr>
                  <tr>
                    <td><b>Email:</b></td>
                    <td>{this.data.currentUser.emails[0].address}</td>
                  </tr>
                  <tr>
                    <td><b><a href="/changePassword">Change Password</a></b></td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<Unauthorized />);
    }
  }
});
