// Deny all client-side updates on the Lists collection
Meteor.users.deny({
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