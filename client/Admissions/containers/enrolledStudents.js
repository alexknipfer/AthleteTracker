import { createContainer } from 'meteor/react-meteor-data';
import EnrolledStudents from '../components/EnrolledStudents/EnrolledStudents.js';

export default createContainer(() => {

  const handle = Meteor.subscribe("enrolledStudents");

  const loading = !handle.ready();

  const myEnrolledStudents = EnrolledStudentData.find({
    createdBy: Meteor.userId()
  }).fetch()

  const enrolledStudentCount = EnrolledStudentData.find().count();

  return {
    loading,
    myEnrolledStudents,
    enrolledStudentCount
  };
}, EnrolledStudents);
