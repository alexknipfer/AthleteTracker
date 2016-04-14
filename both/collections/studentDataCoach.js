StudentDataCoach = new Mongo.Collection('StudentDataCoach');

if(Meteor.isServer){
  StudentDataCoach._ensureIndex({firstname: 1, lastname: 1});
  StudentDataCoach._ensureIndex({gpa: 1});
}

// Deny all client-side updates on the Lists collection
StudentDataCoach.deny({
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
