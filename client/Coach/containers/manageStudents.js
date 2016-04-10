import { createContainer } from 'meteor/react-meteor-data';
import ManageStudents from '../components/ManageStudents/ManageStudents.js';

export default createContainer(() => {

  let searchQuery = new ReactiveVar();
  let searching = new ReactiveVar(false);

  //const handle = Meteor.subscribe("students");
  console.log(searchQuery)

  const handle = Meteor.subscribe( 'students', searchQuery.get(), () => {
      setTimeout( () => {
        searching.set( false );
      }, 300 );
    });

  const loading = !handle.ready();

  const myStudents = StudentDataCoach.find({
    createdBy: Meteor.userId()
  }).fetch()

  const myStudentCount = StudentDataCoach.find().count()

  return {
    searchQuery,
    searching,
    myStudents,
    myStudentCount
  };
}, ManageStudents);
