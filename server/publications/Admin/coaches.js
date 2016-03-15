Meteor.publish("coaches", function() {
  return Meteor.users.find({
    roles: "coach"
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