StudentDataCoach = new Mongo.Collection('StudentDataCoach');

// Deny all client-side updates on the Lists collection
StudentDataCoach.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});