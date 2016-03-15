const AddCoach = new ValidatedMethod({
  name: 'AddCoach',
  validate: new SimpleSchema({
    coachUserName: {
      type: String
    },
    coachFirstName: {
      type: String
    },
    coachLastName: {
      type: String
    },
    coachEmail: {
      type: String
    },
    coachPassword: {
      type: String
    }

  }).validator(),
  run({
    coachUserName, coachFirstName, coachLastName, coachEmail, coachPassword
  }) {
    let userCoach = Accounts.createUser({
      username: coachUserName,
      password: coachPassword,
      email: coachEmail
    });

    Meteor.users.update(userCoach, {
      $set: {
        firstname: coachFirstName,
        lastname: coachLastName
      }
    });

    Roles.addUsersToRoles(userCoach, "coach");
  }
});