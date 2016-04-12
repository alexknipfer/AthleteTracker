const updateProfileFirstName = new ValidatedMethod({
  name: 'updateProfileFirstName',
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
