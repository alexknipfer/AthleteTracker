import React from 'react';

AddSchool = React.createClass({

  handleSubmit(e){
  e.preventDefault();

  const schoolName = this.refs.schoolName.value;
  const schoolCoach = this.refs.schoolCoach.value;
  const schoolAddress = this.refs.schoolAddress.value;
  const schoolZip = this.refs.schoolZip.value;
  const schoolCity = this.refs.schoolCity.value;
  const schoolState = this.refs.schoolState.value;
  const schoolPhone = this.refs.schoolPhone.value;

  Meteor.call("AddSchoolData", {schoolName, schoolCoach, schoolAddress,schoolZip, schoolCity, schoolState, schoolPhone}, (error) => {
      if(error){
        Bert.alert(error.reason, "danger");
      }

      else{
        FlowRouter.go("/schools");
        Bert.alert( 'School added successfully!', 'success', 'growl-top-right' );
      }
    });
  },

  render(){
    if(Roles.userIsInRole(Meteor.userId(), "coach"))
    {
      return(
        <div>
          <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content black-text">
                <span className="card-title">Add School</span>

                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col s12">
                      <input type="text" ref="schoolName" className="validate" placeholder="School Name" minLength={2} required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <input type="text" ref="schoolCoach" className="validate" placeholder="School Coach" minLength={2} required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s6">
                      <input type="text" ref="schoolAddress" className="validate" placeholder="School Address" minLength={2} required />
                    </div>

                    <div className="col s6">
                      <input type="text" ref="schoolZip" className="validate" placeholder="School Zip Code" minLength={2} required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s6">
                      <input type="text" ref="schoolCity" className="validate" placeholder="School City" minLength={2} required />
                    </div>

                    <div className="col s6">
                      <input type="text" ref="schoolState" className="validate" placeholder="School State" maxLength={2}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <input type="text" ref="schoolPhone" className="validate" placeholder="School Phone Number" minLength={2}/>
                    </div>
                  </div>

                  <button className="btn waves-effect login grey" type="submit">Add School</button>

                </form>
              </div>
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
