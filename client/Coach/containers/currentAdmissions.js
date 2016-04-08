import { createContainer } from 'meteor/react-meteor-data';
import CurrentAdmissions from '../components/ManageAdmissions/CurrentAdmissions.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("admissionsAgents");
  const loading = !handle.ready();

  const admissionsUsers = Meteor.users.find({
    roles: "admissions"
  }).fetch()

  const myAdmissionsCount = Meteor.users.find({
    roles: "admissions"
  }).count()

  return {
    admissionsUsers,
    myAdmissionsCount
  };
}, CurrentAdmissions);
