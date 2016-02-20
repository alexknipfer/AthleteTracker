Meteor.publish("students", function() {
    return StudentDataCoach.find({
        createdBy: this.userId
    }, {
        fields: {
            firstname: 1,
            middleInitial: 1,
            lastname: 1,
            school: 1,
            gpa: 1,
            act: 1,
            sat: 1,
            createdBy: 1
        }
    });
});