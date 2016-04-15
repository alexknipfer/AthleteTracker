const editStudent= new ValidatedMethod({
  name: 'editStudent',
  validate: new SimpleSchema({
    studentId: {
      type: String
    },
    newGradYear: {
      type: String
    },
    newGPA: {
      type: String
    },
    newACT: {
      type: String
    },
    newDOB: {
      type: String
    },
    newPhoneNumber: {
      type: String
    },
    newEmail: {
      type: String
    },
    newCity: {
      type: String
    },
    newState: {
      type: String
    },
    newHeight: {
      type: String
    },
    newWeight: {
      type: String
    },
    newHalfSpeed: {
      type: String
    },
    newFullSpeed: {
      type: String
    },
    newDominantHand: {
      type: String
    },
    newPosition: {
      type: String
    }

  }).validator(),
  run({
    studentId, newGradYear, newGPA, newACT, newDOB, newPhoneNumber, newEmail, newCity, newState, newHeight, newWeight, newHalfSpeed, newFullSpeed, newDominantHand, newPosition
  }) {
    StudentDataCoach.update({
      _id: studentId
    }, {
      $set:{
        gradYear: newGradYear,
        gpa: newGPA,
        act: newACT,
        dob: newDOB,
        phoneNumber: newPhoneNumber,
        email: newEmail,
        city: newCity,
        state: newState,
        height: newHeight,
        weight: newWeight,
        speedHalf: newHalfSpeed,
        speedFull: newFullSpeed,
        handOrientation: newDominantHand,
        position: newPosition
      }
    });
  }
});
