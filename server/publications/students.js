Meteor.publish("students", function() {
    return StudentDataCoach.find({
        createdBy: this.userId
    }, {
        fields: {
            firstname: 1,
            lastname: 1,
            gradYear: 1,
            gpa: 1,
            act: 1,
            dob: 1,
            phoneNumber: 1,
            email: 1,
            city: 1,
            state: 1,
            height: 1,
            weight: 1,
            speedHalf: 1,
            speedFull: 1,
            handOrientation: 1,
            position: 1,
            createdBy: 1
        }
    });
});