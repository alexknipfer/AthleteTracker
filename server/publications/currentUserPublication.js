Meteor.publish("currentUser", function() {
    return Meteor.users.find({
        _id: this.userId
    }, {
        fields: {
            firstname: 1
        }
    });
});