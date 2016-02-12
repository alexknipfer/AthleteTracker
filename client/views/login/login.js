Template.login.events({
  "submit form"(e){
    e.preventDefault();
    let username = $("[name=username]").val();
    let password = $("[name=password]").val();
    
    Meteor.loginWithPassword(username, password, (error, reason) => {
      if(error){
        Bert.alert(error.reason, "danger");
      }
      else{
        FlowRouter.go("/manageStudents");
      }
    });
  }
});

Template.login.onRendered(function() {
  $("#loginForm").validate({
    rules: {
      username:{
        required: true
      },
      password:{
        required: true
      }
    },
    
    messages: {
      username: {
        required: "Enter a valid username"
      },
      password:{
        required: "Enter a valid password"
      }
    }
  });
});