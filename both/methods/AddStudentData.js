const AddStudentData = new ValidatedMethod({
  name: 'AddStudentData',
  validate: new SimpleSchema({
    firstname: {
      type: String
    },
    middleInitial: {
      type: String
    },
    lastname: {
      type: String
    },
    school: {
      type: String
    },
    gpa: {
      type: String
    },
    act: {
      type: String
    },
    sat: {
      type: String, 
      min: 2
    },

  }).validator(),
  run({
    firstname, middleInitial, lastname, school, gpa, act, sat
  }) {
    StudentDataCoach.insert({
      firstname: firstname,
      middleInitial: middleInitial,
      lastname: lastname,
      school: school,
      gpa: gpa,
      act: act,
      sat: sat
    });
  }
});