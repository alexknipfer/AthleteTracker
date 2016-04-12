const updateProfileLastName = new ValidatedMethod({
  name: 'updateProfileLastName',
  validate: null,

  run({
    lastname
  }) {
    Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        lastname: lastname
      }
    });
  }
});
