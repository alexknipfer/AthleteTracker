import React from 'react';
import Loading from '../../../common/components/Loading/Loading.js';

CurrentAdmissions = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("admissionsAgents");
    return {
      loading: !handle.ready(),
      myAdmissions: Meteor.users.find({
        roles: "admissions"
      }).fetch(),
      myAdmissionsCount: Meteor.users.find({
        roles: "admissions"
      }).count()
    };
  },

  render(){
    if (this.data.loading) {
      return (
        <Loading />
      );
    }

    else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "coach"))
    {
      return(
        <div>
          <div className="row">
            <div col="s12 m4 l4">
            <a className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1" href="/addAdmissions"><i className="material-icons">add</i></a>
            </div>
          </div>

          {(() => {
            if(this.data.myAdmissionsCount == 0){
              return(
                <NoAdmissions />
              );
            }

            else{
              return(
                <div>
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <div className="card">
                        <div className="card-content black-text">
                          <span className="card-title">Current Admission Agents</span>

                          <AdmissionsTable admissionsData={this.data.myAdmissions} />
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



  }
});
