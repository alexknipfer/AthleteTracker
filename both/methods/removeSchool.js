Meteor.methods({
  removeSchool(id){
    SchoolData.remove({
      _id: id,
    });
  }
});
