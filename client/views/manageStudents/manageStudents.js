Template.manageStudents.events({
  "click .addStudent" (e) {
    e.preventDefault()
    $('.addStudent').leanModal();
  }
});