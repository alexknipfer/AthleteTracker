import React from 'react';
import Alert from 'react-s-alert';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import Loading from '../../../common/components/Loading/Loading.js';

export default class Email extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    const studentEmail = this.props.studentEmail;
    const emailSubject = this.refs.emailSubject.value;
    const emailBody = this.refs.emailBody.value;

    console.log(studentEmail);

    Meteor.call("sendStudentEmail", {studentEmail, emailSubject, emailBody}, (error) => {
      if(error){
        Alert.error(error.reason, {
            position: 'bottom',
            effect: 'stackslide',
            timeout: 3000
        });
      }
      else{
        FlowRouter.go('/manageStudents');
        Alert.success("Email Sent!", {
            position: 'bottom',
            effect: 'stackslide',
            timeout: 3000
        });
      }
    });
  }
  render(){
    if(this.props.loading){
      return(
        <Loading />
      );
    }

    else if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "coach")){
      return (
        <div className="row">
          <div className="col s12 m8 l6 offset-l3 offset-m2">
            <div className="card login-padding">
              <div className="card-content black-text">
                <span className="card-title">
                  Email Athlete
                </span>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="row">
                    <div className="input-field col l12">
                      <label className="active" for="email_address">To:</label>
                      <input
                        id="email_address"
                        type="text"
                        defaultValue={this.props.studentEmail}
                        className="validate" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col l12">
                      <label className="active" for="email_Subject">Subject:</label>
                      <input
                        id="email_Subject"
                        ref="emailSubject"
                        type="text"
                        className="validate" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col l12">
                      <textarea
                        id="email_Body"
                        ref="emailBody"
                        className="materialize-textarea">
                      </textarea>
                      <label for="email_Body">Body:</label>
                    </div>
                  </div>

                  <button
                    className="btn waves-effect waves-light"
                    type="submit">
                    Send Email
                    <i className="material-icons right">send</i>
                  </button>
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
