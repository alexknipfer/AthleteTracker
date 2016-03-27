Meteor.methods({
  removeAdmissions(id){
    Meteor.users.remove({
      _id: id,
    });
  }
});