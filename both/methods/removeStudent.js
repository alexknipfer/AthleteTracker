Meteor.methods({
  removeStudent(id, firstname, lastname){
    StudentDataCoach.remove({
      _id: id,
    });
    TempStudents.remove({
      firstname: firstname,
      lastname: lastname
    });
  }
});
