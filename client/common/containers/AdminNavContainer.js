import { createContainer } from 'meteor/react-meteor-data';
import AdminNav from '../components/Navigation/AdminNav.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("currentUser");
  const loading = !handle.ready();

  const currentUser = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  return {
    currentUser
  };
}, AdminNav);
