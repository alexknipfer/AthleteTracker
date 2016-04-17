EnrolledStudentData = new Mongo.Collection('EnrolledStudentData');

// Deny all client-side updates on the Lists collection
EnrolledStudentData.deny({
  insert() {
      return true;
    },
    update() {
      return true;
    },
    remove() {
      return true;
    },
});
