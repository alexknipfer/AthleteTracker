Meteor.publish("currentUser", function() {
    return Meteor.users.find({
        _id: this.userId
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