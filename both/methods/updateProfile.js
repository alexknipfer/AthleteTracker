const updateProfile = new ValidatedMethod({
  name: 'updateProfile',
  validate: null,

  run({
    firstname
  }) {
    Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        firstname: firstname
      }
    });
  }
});