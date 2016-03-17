Meteor.publish("schools", function() {
    return SchoolData.find({
        createdBy: this.userId
    }, {
        fields: {
            schoolName: 1,
            schoolCoach: 1,
            schoolAddress: 1,
            schoolZip: 1,
            schoolCity: 1,
            schoolState: 1,
            schoolPhone: 1,
            createdBy: 1
        }
    });
});