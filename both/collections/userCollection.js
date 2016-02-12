Meteor.users.schema = new SimpleSchema({
   username: {
       type: String,
       regEx: /^[a-z0-9A-Z_]{3,15}$/
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
       regEx: /^[a-zA-Z_]{3,50}$/,
       optional: true
   },
   
   lastname: {
       type: String,
       regEx: /^[a-zA-Z_]{2, 50}$/,
       optional: true
   },
   
   services: {
       type: Object,
       blackbox: true,
       optional: true,
   }
});

Meteor.users.attachSchema(Meteor.users.schema);