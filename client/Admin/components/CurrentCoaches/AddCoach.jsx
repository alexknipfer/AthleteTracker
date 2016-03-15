AddCoach = React.createClass({

  handleSubmit(e){
    e.preventDefault();

    const coachUserName = this.refs.coachUserName.value;
    const coachFirstName = this.refs.coachFirstName.value;
    const coachLastName = this.refs.coachLastName.value;
    const coachEmail = this.refs.coachEmail.value;
    const coachPassword = this.refs.coachPassword.value;

    Meteor.call("AddCoach", {coachUserName, coachFirstName, coachLastName, coachEmail, coachPassword}, (error) => {
      if(error){
        Bert.alert(error.reason, "danger");
      }

      else{
        FlowRouter.go("/currentCoaches");
        Bert.alert( 'Coach added successfully!', 'success', 'growl-top-right' );
      }
    });
  },

  render(){
    return(
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-content black-text">
              <span className="card-title">Add Coach</span>

              <form onSubmit={this.handleSubmit}>

                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="coachUserName" className="validate" placeholder="Username" minLength={2} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="coachFirstName" className="validate" placeholder="First Name" minLength={2} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="coachLastName" className="validate" placeholder="Last Name" minLength={2} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="coachEmail" className="validate" placeholder="Email" minLength={2}/>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <input type="password" ref="coachPassword" className="validate" placeholder="Password" minLength={2} required />
                  </div>
                </div>

                <button className="btn waves-effect login grey" type="submit">Add Coach</button>

              </form>

            </div>
          </div>
        </div>
      </div>
      );
  }
});