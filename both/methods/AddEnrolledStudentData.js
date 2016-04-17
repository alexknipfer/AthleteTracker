const AddEnrolledStudentData = new ValidatedMethod({
  name: 'AddEnrolledStudentData',
  validate: new SimpleSchema({
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    studentID: {
      type: String
    },

  }).validator(),
  run({
    firstname, lastname, studentID
  }) {
    EnrolledStudentData.insert({
      firstname: firstname,
      lastname: lastname,
      studentID: studentID,
      createdBy: this.userId
    });
  }
});
