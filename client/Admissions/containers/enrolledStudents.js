import { createContainer } from 'meteor/react-meteor-data';
import EnrolledStudents from '../components/EnrolledStudents/EnrolledStudents.js';

export default createContainer(() => {


  const handle = Meteor.subscribe("enrolledStudents");

  const loading = !handle.ready();

  return {
    searchQuery,
    searching,
    myStudents,
    myStudentCount,
    totalStudents
  };
}, EnrolledStudents);
