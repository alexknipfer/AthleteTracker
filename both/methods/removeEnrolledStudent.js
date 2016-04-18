Meteor.methods({
  removeEnrolledStudent(id, firstname, lastname){
    EnrolledStudentData.remove({
      _id: id,
    });
  }
});
