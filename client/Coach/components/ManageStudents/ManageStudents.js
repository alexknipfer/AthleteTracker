import React from 'react';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import Loading from '../../../common/components/Loading/Loading.js';
import AddStudentCoach from '../ManageStudents/AddStudentCoach.js';
import NoStudents from '../ManageStudents/NoStudents.js';
import StudentFilter from '../ManageStudents/StudentFilter.js';
import StudentCard from '../ManageStudents/StudentCard.js';
import Search from '../ManageStudents/Search.js';

export default class ManageStudents extends React.Component{
  render() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    }

    else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    }

    else if (Roles.userIsInRole(Meteor.userId(), "coach")) {
      return (
        <div>
          <div className="row">
            <div col="s12 m4 l4">
              <a
                className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1"
                href="/AddStudentCoach">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>

          {(() => {
            if(this.props.myStudentCount == 0 && !this.props.searching){
              console.log("HELO");
              return(
                <NoStudents />
              );
            }

            else{
              return(
                <div>
                  <Search
                    searching={this.props.searching}
                    searchQuery={this.props.searchQuery}/>
                  {(() => {
                    if(this.props.myStudentCount != 0 ) {
                      return (
                        <StudentCard studentData={this.props.myStudents} />
                      );
                    }
                    else{
                      return(
                        <h5 className="red-text">No Results found...</h5>
                      );
                    }
                  })()}
                </div>
              );
            }
          })()}

        </div>
      );
    }
    else {
      return (
        <Unauthorized />
      );
    }
  }
}
