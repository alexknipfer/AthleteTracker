const AddSchoolData = new ValidatedMethod({
  name: 'AddSchoolData',
  validate: new SimpleSchema({
    schoolName: {
      type: String
    },
    schoolCoach: {
      type: String
    },
    schoolAddress: {
      type: String
    },
    schoolZip: {
      type: String
    },
    schoolCity: {
      type: String
    },
    schoolState: {
      type: String
    },
    schoolPhone: {
      type: String,
      min: 2
    },

  }).validator(),
  run({
    schoolName, schoolCoach, schoolAddress, schoolZip, schoolCity, schoolState, schoolPhone
  }) {
    SchoolData.insert({
      schoolName: schoolName,
      schoolCoach: schoolCoach,
      schoolAddress: schoolAddress,
      schoolZip: schoolZip,
      schoolCity: schoolCity,
      schoolState: schoolState,
      schoolPhone: schoolPhone,
      createdBy: this.userId
    });
  }
});