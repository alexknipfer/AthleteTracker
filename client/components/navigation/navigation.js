Template.navigation.onCreated(function() {
  this.autorun(() => {
    this.subscribe("currentUser");
  });
});

Template.navigation.onRendered(() => {
  $('.button-collapse').sideNav({
    menuWidth: 210,
    edge: 'left',
    closeOnClick: true
  });
});

Template.navigation.events({
  "click .logoutButton"(e){
    e.preventDefault();
    let user = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    Bert.alert( "You are now logged out, " + user.firstname + "!", "success", "fixed-top");
    FlowRouter.go("/");
    Meteor.logout();
  }
});