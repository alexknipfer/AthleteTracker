Meteor.methods({
  removeCoach(id){
    Meteor.users.remove({
      _id: id,
    });
  }
});