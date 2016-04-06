import React from 'react';

ChangePassword = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const oldPassword = this.refs.oldPassword.value;
    const newPassword = this.refs.newPassword.value;

    Accounts.changePassword(oldPassword, newPassword, (error, reason) => {
      if(error){
        Bert.alert(error.reason, "danger");
      }

      else{
        Bert.alert("Successfully changed password!", "success", "fixed-top");
        FlowRouter.go("/profile");
      }
    });
  },

 render(){
   return (
     <div className="row">
      <div className="col s12 m8 l6 offset-l3 offset-m2">
        <div className="card login-padding">
          <div className="card-content black-text">
            <span className="card-title">Change Password</span>

            <form onSubmit={this.handleSubmit}>
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

});
