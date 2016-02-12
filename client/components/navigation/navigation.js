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
    Meteor.logout();
    FlowRouter.go("/");
  }
});