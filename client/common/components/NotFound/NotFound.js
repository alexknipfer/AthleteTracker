import React from 'react';

export default class NotFound extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col s12 m8 l10 offset-l1 offset-m2 unauthorized-page">
          <div className="card red lighten-3 unauthorized-card">
              <center>
                <h3 className="white-text">Oops...</h3>
              </center>
              <div className="card-content white-text">
                <h5 className = "white-text">Looks like the page you were trying to reach doesnt exist.
                Sorry about that!</h5>
                <hr />
                <br />
                <a href="/" className="button btn waves-effect login grey right">Return Home</a>
              </div>
            </div>
        </div>
      </div>
      );
  }
}
