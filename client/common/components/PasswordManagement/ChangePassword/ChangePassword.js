import React from 'react';
import Alert from 'react-s-alert';
import Unauthorized from '../../Unauthorized/Unauthorized.js';

export default class ChangePassword extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    const oldPassword = this.refs.oldPassword.value;
    const newPassword = this.refs.newPassword.value;

    Accounts.changePassword(oldPassword, newPassword, (error, reason) => {
      if(error){
        Alert.error(error.reason, {
            position: 'bottom',
            effect: 'stackslide',
            timeout: 3000
        });
      }

      else{
        Alert.success("Successfully Changed Password!", {
            position: 'bottom',
            effect: 'stackslide',
            timeout: 3000
        });
        FlowRouter.go("/profile");
      }
    });
  }

 render(){
   if (Roles.userIsInRole(Meteor.userId(), "coach") || Roles.userIsInRole(Meteor.userId(), "admin") || Roles.userIsInRole(Meteor.userId(), "admissions")){
   return (
     <div className="row">
      <div className="col s12 m8 l6 offset-l3 offset-m2">
        <div className="card login-padding">
          <div className="card-content black-text">
            <span className="card-title">Change Password</span>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="col s12">
                  <input type="password" ref="oldPassword" className="validate" placeholder="Old Password" minLength={2} required />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <input type="password" ref="newPassword" className="validate" placeholder="New Password" minLength={2} required />
                </div>
              </div>

              <button className="btn waves-effect login grey" type="submit">Change Password</button>
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
