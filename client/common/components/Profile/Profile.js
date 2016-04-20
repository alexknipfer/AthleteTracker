import React from 'react';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import Loading from '../../../common/components/Loading/Loading.js';

export default class Profile extends React.Component{

  updateProfileFirstName(){
    const firstname = this.refs.firstname.value;
    Meteor.call("updateProfileFirstName", {firstname});
  }

  updateProfileLastName(){
    const lastname = this.refs.lastname.value;
    Meteor.call("updateProfileLastName", {lastname})
  }

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

    else if (Roles.userIsInRole(Meteor.userId(), "coach") || Roles.userIsInRole(Meteor.userId(), "admin") || Roles.userIsInRole(Meteor.userId(), "admissions")) {
      return (
        <div className="row">
          <div className="col s12 m8 l6 offset-l3 offset-m2">
            <div className="card login-padding">
              <div className="card-content black-text">
                <span className="card-title">
                  My Profile
                </span>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Username: </b>
                      </td>
                      <td>
                        <input
                          disabled
                          defaultValue={this.props.currentUser.username} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Firstname:</b>
                      </td>
                      <td>
                        <input
                          ref="firstname"
                          onChange={this.updateProfileFirstName.bind(this)}
                          defaultValue={this.props.currentUser.firstname} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Lastname:</b>
                      </td>
                      <td>
                        <input
                          ref="lastname"
                          onChange={this.updateProfileLastName.bind(this)}
                          defaultValue={this.props.currentUser.lastname} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Email:</b>
                      </td>
                      <td>
                        <input
                          disabled
                          defaultValue={this.props.currentUser.emails[0].address} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <a href="/changePassword">
                            Change Password
                          </a>
                        </b>
                      </td>
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
      return (
        <Unauthorized />
      );
    }
  }
}
