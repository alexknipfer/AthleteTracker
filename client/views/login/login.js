Template.login.events({
  "click .login"(e){
    e.preventDefault();
    Bert.alert( 'Welcome, login successful!', 'success', 'growl-top-right' );
  }
});