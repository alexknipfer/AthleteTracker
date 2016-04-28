StudentDataCoach = new Mongo.Collection('StudentDataCoach');

if(Meteor.isServer){
  StudentDataCoach._ensureIndex({firstname: 1, lastname: 1, gradYear: 1, gpa: 1, act: 1, email: 1, height: 1});
  StudentDataCoach._ensureIndex({weight: 1, handOrientation: 1, position: 1, firstLast: 1});
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
