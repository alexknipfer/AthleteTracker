Unauthorized = React.createClass({
  render(){
    return(
      <div className="row">
        <div className="col s12 m8 l10 offset-l1 offset-m2">
          <div className="card red lighten-3 unauthorized-card">
              <center>
                <i className="material-icons large white-text offset">warning</i>
              </center>
              <div className="card-content white-text">
                <span className="unauthorized-title">Oops! You are not authorized to view this page</span>
                <p className = "unauthorized-para">Unfortunately, you don't have permission to view the page
                you have requested using the credentials you have provided.</p>
                <hr />
                <p>Please try the following:</p>
                  <blockquote>Login using different credentials</blockquote>
                  <blockquote>Contact your web administrator if you believe you should
                  have access to view this page</blockquote>
              </div>
            </div>
        </div>
      </div>
      );
  }
});