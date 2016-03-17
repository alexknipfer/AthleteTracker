SchoolData = new Mongo.Collection('SchoolData');

// Deny all client-side updates on the Lists collection
SchoolData.deny({
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