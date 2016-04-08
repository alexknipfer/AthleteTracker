import React from 'react';
import Alert from 'react-s-alert';

export default class ForgotPassword extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    const email= this.refs.email.value;
    var options = {};
    options.email = email;

    Accounts.forgotPassword(options, (error, reason) => {
      if(error){
        Alert.error(error.reason, {
            position: 'bottom',
            effect: 'stackslide',
            timeout: 3000
        });
      }

      else{
        Alert.success("Password has been sent to your email!", {
            position: 'bottom',
            effect: 'stackslide',
            timeout: 3000
        });
        FlowRouter.go("/");
      }
    });
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
                  <input type="text" ref="email" className="validate" placeholder="Email" minLength={2} required />
                </div>
              </div>
              <button className="btn waves-effect login grey" type="submit">Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
 }
}
