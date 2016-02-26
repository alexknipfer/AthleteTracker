Login = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    Meteor.loginWithPassword(username, password, (error, reason) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
      else { 
        Bert.alert("Welcome!", "success", "fixed-top");
        FlowRouter.go("/manageStudents");
      }
    });
  },
  
 render(){
   return (
     <div className="row">
      <div className="col s12 m8 l6 offset-l3 offset-m2">
        <div className="card login-padding">
            <div className="card-image image-padding">
                  <img src="images/logo.jpg" width="130" height="170" />
            </div>
          <div className="card-content black-text">
            <span className="card-title">Login</span>
  
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col s12">
                  <input type="text" ref="username" className="validate" placeholder="Username" minLength={2} required />
                </div>
              </div>
              
              <div className="row">
                <div className="col s12">
                  <input type="password" ref="password" className="validate" placeholder="Password" minLength={2} required />
                </div>
              </div>
  
              <button className="btn waves-effect login grey" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
 } 

});