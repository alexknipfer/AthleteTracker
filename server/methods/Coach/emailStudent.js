const sendStudentEmail = new ValidatedMethod({
  name: 'sendStudentEmail',
  validate: new SimpleSchema({
    studentEmail: {
      type: String
    },
    emailSubject: {
      type: String
    },
    emailBody:{
      type: String
    }
  }).validator(),
  run({
    studentEmail, emailSubject, emailBody
  }) {
    Email.send({
      from: "admin@lutracker.herokuapp.com",
      to: studentEmail,
      subject: emailSubject,
      text: emailBody
    });
  }
});
