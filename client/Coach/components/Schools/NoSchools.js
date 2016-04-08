import React from 'react';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';

export default class NoAdmissions extends React.Component{
  render(){
    if(Roles.userIsInRole(Meteor.userId(), "coach"))
    {
      return (
       <div className="row">
        <div className="col s12 m8 l6 offset-l3 offset-m2">
          <div className="card red lighten-3">
            <div className="card-content white-text no-schools-card">
              <p>You currently have no schools added in the tracking system.
              To begin adding schools, click the plus(+) sign in the bottom
              right.</p>

            </div>
          </div>
        </div>
      </div>
      );
    }

    else{
      return(<Unauthorized />);
    }

  }
}
