import React from 'react';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';

export default class NoStudents extends React.Component{
  render(){
    if(Roles.userIsInRole(Meteor.userId(), "coach"))
    {
      return (
       <div className="row">
        <div className="col s12 m8 l6 offset-l3 offset-m2">
          <div className="card red lighten-3">
            <div className="card-content white-text no-student-card">
              <span className="card-title">Welcome to LU Tracker</span>
              <p>Welcome to the Lindenwood University athelete / student tracking
              system. You can now add athletes your interested in recruiting and
              keep track of all of their data for easy access and management!</p>

              <hr />

              <p>You currently have no athletes added to your tracking system.
              To begin adding athletes click the plus(+) sign in the bottom
              right.</p>

              <hr />

              <p>If you have any questions feel free to contact the
              <a href="mailto:alexanderknipfer@gmail.com?Subject=LU%20Tracker_Ticket" target="_top"> web administrator</a>.</p>

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
