import React from 'react';
import Loading from '../../../common/components/Loading/Loading.js';
import Unauthorized from '../../../common/components/Unauthorized/Unauthorized.js';
import SchoolCard from '../Schools/SchoolCard.js';
import NoSchools from '../Schools/NoSchools.js';


export default class Schools extends React.Component{

  render(){
    if (this.props.loading) {
      return (
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "coach")){
      return(
        <div>
          <div className="row">
            <div col="s12 m4 l4">
              <a
                className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1"
                href="/AddSchool">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>

          {(() => {
            if(this.props.mySchoolCount == 0){
              return(
                <NoSchools />
              );
            }

            else{
              return (
                <div>
                  <ul className="collection">
                    <SchoolCard schoolData={this.props.mySchools} />
                  </ul>
                </div>
              );
            }
          })()}
        </div>
      );






    } //end roles check

    else{
      return(
        <Unauthorized />
      );
    }
  }

}
