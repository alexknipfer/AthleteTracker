const checkStudent = new ValidatedMethod({
  name: 'checkStudent',
  validate: null,

  run({
    firstname, lastname
  }) {
    var found = StudentDataCoach.findOne({firstname: firstname, lastname: lastname});
    console.log(found);

    if(found){
      throw new Meteor.Error(500, 'Error 500: Not found', 'the document is not found');
    }

    return found;
  }
});
