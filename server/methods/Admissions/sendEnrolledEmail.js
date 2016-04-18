const sendEnrolledEmail = new ValidatedMethod({
  name: 'sendEnrolledEmail',
  validate: null,

  run() {
    Email.send({
      from: "alexanderknipfer@gmail.com",
      to: "alexanderknipfer@gmail.com",
      subject: "Subject",
      text: "Here is some text"
    });
  }
});
