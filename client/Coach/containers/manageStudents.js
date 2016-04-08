import { createContainer } from 'meteor/react-meteor-data';
import ManageStudents from '../components/ManageStudents/ManageStudents.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("students");
  const loading = !handle.ready();

  const myStudents = StudentDataCoach.find({
    createdBy: Meteor.userId()
  }).fetch()

  const myStudentCount = StudentDataCoach.find().count()

  return {
    myStudents,
    myStudentCount
  };
}, ManageStudents);
