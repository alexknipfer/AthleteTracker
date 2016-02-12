Template.manageStudents.events({
  "click .addStudent" (e) {
    e.preventDefault()
    $('.addStudent').leanModal();
  }
});

Template.manageStudents.helpers({
  curUser() {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  }
})