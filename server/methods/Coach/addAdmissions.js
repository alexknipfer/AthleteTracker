const AddAdmissions = new ValidatedMethod({
  name: 'AddAdmissions',
  validate: new SimpleSchema({
    admissionsUserName: {
      type: String
    },
    admissionsFirstName: {
      type: String
    },
    admissionsLastName: {
      type: String
    },
    admissionsEmail: {
      type: String
    },
    admissionsPassword: {
      type: String
    }

  }).validator(),
  run({
    admissionsUserName, admissionsFirstName, admissionsLastName, admissionsEmail, admissionsPassword
  }) {
    let userAdmissions = Accounts.createUser({
      username: admissionsUserName,
      password: admissionsPassword,
      email: admissionsEmail
    });

    Meteor.users.update(userAdmissions, {
      $set: {
        firstname: admissionsFirstName,
        lastname: admissionsLastName
      }
    });

    Roles.addUsersToRoles(userAdmissions, "admissions");
  }
});