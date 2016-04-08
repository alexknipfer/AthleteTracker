import { createContainer } from 'meteor/react-meteor-data';
import CurrentCoaches from '../components/CurrentCoaches/CurrentCoaches.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("coaches");
  const loading = !handle.ready();

  const myCoaches = Meteor.users.find({
    roles: "coach"
  }).fetch()

  const myCoachCount = Meteor.users.find({
    roles: "coach"
  }).count()

  return {
    myCoaches,
    myCoachCount
  };
}, CurrentCoaches);
