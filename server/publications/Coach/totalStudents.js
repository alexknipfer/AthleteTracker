Meteor.publish("totalStudents", function() {
    return StudentDataCoach.find({
        createdBy: this.userId
    });
});
