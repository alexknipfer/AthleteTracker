import React from 'react';

import Loading from '../../../common/components/Loading/Loading.js';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import NoCoaches from '../CurrentCoaches/NoCoaches.js';
import CoachTable from '../CurrentCoaches/CoachTable.js';

export default class CurrentCoaches extends React.Component{
  render(){
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

    else if(Roles.userIsInRole(Meteor.userId(), "admin"))
    {
      return(
        <div>
          <div className="row">
            <div col="s12 m4 l4">
              <a
                className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1"
                href="/AddCoach">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>

          {(() => {
            if(this.props.myCoachCount == 0){
              return(
                <NoCoaches />
              );
            }

            else{
              return(
                <div>
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <div className="card">
                        <div className="card-content black-text">
                          <span className="card-title">
                            Current Coaches
                          </span>

                          <CoachTable coachData={this.props.myCoaches} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })()}
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
