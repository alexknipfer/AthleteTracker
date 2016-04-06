import React from 'react';

AdminNav = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    const handle = Meteor.subscribe("currentUser");

    return{
      currentUser: Meteor.users.findOne({
        _id: Meteor.userId()
      })
    };
  },

  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 210,
      edge: 'left',
      closeOnClick: true
    });
  },

  logout(){
    Meteor.logout();
    Bert.alert( "Goodbye, " + this.data.currentUser.firstname + "!", "success", "fixed-top");
    FlowRouter.go("/");
  },

  render(){
    return(
      <div className="navbar-fixed">
        <nav className="indigo">
          <div className="nav-wrapper">
            <a href="/currentCoaches" className="brand-logo bold"><i className="material-icons large left">trending_up</i>LU Tracker</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/currentCoaches">Manage Coaches</a></li>
              <li><a onClick={this.logout}>Logout</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="/currentCoaches">Manage Coaches</a></li>
              <li><a onClick={this.logout}>Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
      );
  }
});
