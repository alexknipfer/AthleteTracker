Meteor.methods({
  removeStudent(id){
    StudentDataCoach.remove({
      _id: id,
    });
  }
});