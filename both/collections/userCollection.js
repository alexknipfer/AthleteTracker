Meteor.users.schema = new SimpleSchema({
   username: {
       type: String,
   },
   
   emails: {
       type: [Object],
       optional: false
   },
   
   "emails.$.address": {
       type: String,
       regEx: SimpleSchema.RegEx.Email
   },
   
   firstname: {
       type: String,
       optional: true
   },
   
   lastname: {
       type: String,
       optional: true
   },
   
   services: {
       type: Object,
       blackbox: true,
       optional: true,
   }
});

Meteor.users.attachSchema(Meteor.users.schema);