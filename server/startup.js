Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    let userAdmin = Accounts.createUser({
      username: "admin",
      password: "admin",
      email: "alex@gmail.com"
    });

    Meteor.users.update(userAdmin, {
      $set: {
        firstname: "Admin",
        lastname: "Admin"
      }
    });

    Roles.addUsersToRoles(userAdmin, "admin");
  }
});
