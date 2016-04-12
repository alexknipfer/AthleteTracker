Meteor.publish("totalStudents", function() {
    return TempStudents.find({
        createdBy: this.userId
    });
});
