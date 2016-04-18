const sendEnrolledEmail = new ValidatedMethod({
  name: 'sendEnrolledEmail',
  validate: new SimpleSchema({
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    studentID:{
      type: String
    }
  }).validator(),
  run({
    firstname, lastname, studentID
  }) {
    Email.send({
      from: "admin@lutracker.herokuapp.com",
      to: "alexanderknipfer@gmail.com",
      subject: "New Student Enrolled",
      text: "Hello! " + firstname + " " + lastname + " is now enrolled at Lindenwood University. Their Student ID is: " + studentID + "."
    });
  }
});
