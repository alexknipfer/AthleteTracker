Meteor.publish("students", function(search) {
  check( search, Match.OneOf( String, null, undefined ) );

  let query = {},
  projection = {limit: 10, sort: {firstname: 1}};

  if(search){
    let regex = new RegExp(search, 'i');

    query = {
      $or: [
        {firstname: regex},
        {lastname: regex}
      ]
    };

    projection.limit = 100;
  }

  return StudentDataCoach.find(query, projection);



    /*return StudentDataCoach.find({
        createdBy: this.userId
    }, {
        fields: {
            firstname: 1,
            lastname: 1,
            gradYear: 1,
            gpa: 1,
            act: 1,
            dob: 1,
            phoneNumber: 1,
            email: 1,
            city: 1,
            state: 1,
            height: 1,
            weight: 1,
            speedHalf: 1,
            speedFull: 1,
            handOrientation: 1,
            position: 1,
            createdBy: 1
        }
    });*/
});
