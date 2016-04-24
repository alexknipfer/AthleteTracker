Meteor.publish("emailStudentsPublication", function() {
    return StudentDataCoach.find({
        createdBy: this.userId
    });
});
