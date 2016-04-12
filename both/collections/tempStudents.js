TempStudents = new Mongo.Collection('TempStudents');

// Deny all client-side updates on the Lists collection
TempStudents.deny({
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
