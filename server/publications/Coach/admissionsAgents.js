Meteor.publish("admissionsAgents", function() {
  return Meteor.users.find({
    roles: "admissions"
  }, {
    fields: {
      username: 1,
      firstname: 1,
      lastname: 1,
      "emails.address": 1,
      roles: 1
    }
  });
});