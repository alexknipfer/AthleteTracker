const getStudentCount = new ValidatedMethod({
  name: 'getStudentCount',
  validate: null,

  run() {
    let count = StudentDataCoach.find().count();
    console.log(count);
    return count;
  }
});
