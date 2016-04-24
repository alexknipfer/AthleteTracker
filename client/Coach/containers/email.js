import { createContainer } from 'meteor/react-meteor-data';
import Email from '../components/Email/Email.js';

export default createContainer(() => {

  const studentEmail = FlowRouter.getParam('email');

  const handle = Meteor.subscribe("emailStudentsPublication");

  const loading = !handle.ready();

  return {
      loading,
      studentEmail
    };
}, Email);
