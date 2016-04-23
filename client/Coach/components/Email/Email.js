import React from 'react';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import Loading from '../../../common/components/Loading/Loading.js';

export default class Email extends React.Component{
  render(){

    if (Meteor.loggingIn()) {
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
                <form>
                  <div className="row">
                    <div className="input-field col l12">
                      <label className="active" for="email_address">To:</label>
                      <input
                        id="email_address"
                        type="text"
                        className="validate" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col l12">
                      <textarea
                        id="email_subject"
                        className="materialize-textarea">
                      </textarea>
                      <label for="email_subject">Subject:</label>
                    </div>
                  </div>

                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action">
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
