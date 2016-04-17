Meteor.publish("enrolledStudents", function() {
    return EnrolledStudentData.find({
        createdBy: this.userId
    }, {
        fields: {
            firstname: 1,
            lastname: 1,
            studentID: 1,
            createdBy: 1
        }
    });
});
