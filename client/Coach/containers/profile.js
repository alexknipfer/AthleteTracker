import { createContainer } from 'meteor/react-meteor-data';
import Profile from '../components/Profile/Profile.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("currentUser");
  const loading = !handle.ready();

  const currentUser = Meteor.users.findOne({
    _id: Meteor.userId()
  })

  return {
    currentUser
  };
}, Profile);
