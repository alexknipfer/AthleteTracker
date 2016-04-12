const AddStudentData = new ValidatedMethod({
  name: 'AddStudentData',
  validate: new SimpleSchema({
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    gradYear: {
      type: String
    },
    gpa: {
      type: String
    },
    act: {
      type: String
    },
    dob: {
      type: String
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    height: {
      type: String,
    },
    weight: {
      type: String,
    },
    speedHalf: {
      type: String,
    },
    speedFull: {
      type: String,
    },
    handOrientation: {
      type: String,
    },
    position: {
      type: String,
    },

  }).validator(),
  run({
    firstname, lastname, gradYear, gpa, act, dob, phoneNumber, email, city, state, height, weight, speedHalf, speedFull, handOrientation, position
  }) {
    StudentDataCoach.insert({
      firstname: firstname,
      lastname: lastname,
      gradYear: gradYear,
      gpa: gpa,
      act: act,
      dob: dob,
      phoneNumber: phoneNumber,
      email: email,
      city: city,
      state: state,
      height: height,
      weight: weight,
      speedHalf: speedHalf,
      speedFull: speedFull,
      handOrientation: handOrientation,
      position: position,
      createdBy: this.userId
    });
    TempStudents.insert({
      firstname: firstname,
      lastname: lastname,
      gradYear: gradYear,
      gpa: gpa,
      act: act,
      dob: dob,
      phoneNumber: phoneNumber,
      email: email,
      city: city,
      state: state,
      height: height,
      weight: weight,
      speedHalf: speedHalf,
      speedFull: speedFull,
      handOrientation: handOrientation,
      position: position,
      createdBy: this.userId
    });
  }
});
