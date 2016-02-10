LoginSchema = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  
  password: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  }
});