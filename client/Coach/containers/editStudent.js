import { createContainer } from 'meteor/react-meteor-data';
import EditStudent from '../components/ManageStudents/EditStudent.js';

export default createContainer(() => {

  const studentId = FlowRouter.getParam('_id');

  const handle = Meteor.subscribe("editStudentsPublication", studentId);

  const loading = !handle.ready();

  const currentStudent = StudentDataCoach.findOne({
    _id: studentId
  });

  return {
    currentStudent,
    loading
  };
}, EditStudent);
