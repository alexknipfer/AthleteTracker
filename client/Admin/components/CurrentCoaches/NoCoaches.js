import React from 'react';

NoCoaches = React.createClass({
  render(){
    if(Roles.userIsInRole(Meteor.userId(), "admin"))
    {
      return (
       <div className="row">
        <div className="col s12 m8 l6 offset-l3 offset-m2">
          <div className="card red lighten-3">
            <div className="card-content white-text no-coaches-card">
              <span className="card-title">Welcome, Admin!</span>
              <p>Welcome to the Lindenwood University athelete / student tracking
              system.</p>

              <hr />

              <p>You currently have no coaches enrolled in the tracking system.
              To begin adding coaches, click the plus(+) sign in the bottom
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
});
