import React from 'react';
import Alert from 'react-s-alert';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import Loading from '../../../common/components/Loading/Loading.js';

export default class AddCoach extends React.Component{
  handleSubmit(e){
    e.preventDefault();

    const coachUserName = this.refs.coachUserName.value;
    const coachFirstName = this.refs.coachFirstName.value;
    const coachLastName = this.refs.coachLastName.value;
    const coachEmail = this.refs.coachEmail.value;
    const coachPassword = this.refs.coachPassword.value;
    const confirmCoachPassword = this.refs.confirmCoachPassword.value;

    if(coachPassword == confirmCoachPassword){
      Meteor.call("AddCoach", {coachUserName, coachFirstName, coachLastName, coachEmail, coachPassword}, (error) => {
        if(error){
          Alert.error(error.reason, {
              position: 'bottom',
              effect: 'stackslide',
              timeout: 3000
          });
        }

        else{
          FlowRouter.go("/currentCoaches");
          Alert.success("Coach Added Successfully!", {
              position: 'bottom',
              effect: 'stackslide',
              timeout: 3000
          });
        }
      });
    }
    else{
      Alert.error("The two passwords you entered should match.", {
        position: 'bottom',
        effect: 'stackslide',
        timeout: 3000
      });
    }
  }

  render(){
    if(Meteor.loggingIn()){
      return(
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "admin")){
      return(
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content black-text">
                <span className="card-title">
                  Add Coach
                </span>

                <form onSubmit={this.handleSubmit.bind(this)}>

                  <div className="row">
                    <div className="col s12">
                      <input
                        type="text"
                        ref="coachUserName"
                        className="validate"
                        placeholder="Username"
                        minLength={2}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m6 l6">
                      <input
                        type="text"
                        ref="coachFirstName"
                        className="validate"
                        placeholder="First Name"
                        minLength={2}
                        required />
                    </div>

                    <div className="col s12 m6 l6">
                      <input
                        type="text"
                        ref="coachLastName"
                        className="validate"
                        placeholder="Last Name"
                        minLength={2}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <input
                        type="text"
                        ref="coachEmail"
                        className="validate"
                        placeholder="Email"
                        minLength={2}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <input
                        type="password"
                        ref="coachPassword"
                        className="validate"
                        placeholder="Password"
                        minLength={2}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <input
                        type="password"
                        ref="confirmCoachPassword"
                        className="validate"
                        placeholder="Confirm Password"
                        minLength={2}
                        required />
                    </div>
                  </div>

                  <button
                    className="btn waves-effect login grey"
                    type="submit">
                    Add Coach
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
