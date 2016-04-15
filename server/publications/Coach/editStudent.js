Meteor.publish("editStudentsPublication", function() {
    return StudentDataCoach.find({
        createdBy: this.userId
    });
});
