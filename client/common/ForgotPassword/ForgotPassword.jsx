ForgotPassword = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const email= this.refs.email.value;
    var options = {};
    options.email = email;

    Accounts.forgotPassword(options, (error, reason) => {
      if(error){
        Bert.alert(error.reason, "danger");
      }

      else{
        Bert.alert("Password has been sent to your email!", "success", "fixed-top");
        FlowRouter.go("/");
      }
    });
  },

 render(){
   return (
     <div className="row">
      <div className="col s12 m8 l6 offset-l3 offset-m2">
        <div className="card login-padding">
          <div className="card-content black-text">
            <span className="card-title">Reset Password</span>

            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col s12">
                  <input type="text" ref="email" className="validate" placeholder="Email" minLength={2} required />
                </div>
              </div>
              <button className="btn waves-effect login grey" type="submit">Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
 }

});
