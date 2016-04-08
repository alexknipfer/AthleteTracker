import React from 'react';
import Alert from 'react-s-alert';

export default class ResetPassword extends React.Component{
  handleSubmit(e){
    e.preventDefault();

    const newPassword= this.refs.newPassword.value;
    const confirmNewPassword = this.refs.confirmNewPassword.value;

    if(newPassword == confirmNewPassword){
      Accounts.resetPassword(Session.get("reset-password"), newPassword, (error, reason) => {
        if(error){
          Alert.error(error.reason, {
              position: 'bottom',
              effect: 'stackslide',
              timeout: 3000
          });
        }

        else{
          Alert.success("Password changed successfully, welcome back!", {
              position: 'bottom',
              effect: 'stackslide',
              timeout: 3000
          });
          if(Roles.userIsInRole(Meteor.userId(), "admin")){
            FlowRouter.go("/currentCoaches")
          }
          if(Roles.userIsInRole(Meteor.userId(), "coach")){
            FlowRouter.go("/manageStudents");
          }

        }
      });
    }

    else{
      Alert.error("Please make sure the two passwords are the same!", {
          position: 'bottom',
          effect: 'stackslide',
          timeout: 3000
      });
    }
  }

 render(){
     return (
       <div className="row">
        <div className="col s12 m8 l6 offset-l3 offset-m2">
          <div className="card login-padding">
            <div className="card-content black-text">
              <span className="card-title">Reset Password</span>

              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="col s12">
                    <input type="password" ref="newPassword" className="validate" placeholder="Enter New Password" minLength={2} required />
                  </div>
                  <div className="col s12">
                    <input type="password" ref="confirmNewPassword" className="validate" placeholder="Confirm New Password" minLength={2} required />
                  </div>
                </div>
                <button className="btn waves-effect login grey" type="submit">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      );
 }
}
