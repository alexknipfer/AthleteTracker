import { createContainer } from 'meteor/react-meteor-data';
import Email from '../components/Email/Email.js';

export default createContainer(() => {


  const handle = Meteor.subscribe("editStudentsPublication");

  const loading = !handle.ready();

  return {
      loading
    };
}, Email);
