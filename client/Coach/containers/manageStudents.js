import { createContainer } from 'meteor/react-meteor-data';
import ManageStudents from '../components/ManageStudents/ManageStudents.js';

let searchQuery = new ReactiveVar("");
let searching = new ReactiveVar(false);

export default createContainer(() => {

  const handle = Meteor.subscribe( 'students', searchQuery.get(), () => {
      setTimeout( () => {
        searching.set( false );
      }, 300 );
    });



  const loading = !handle.ready();

  const myStudents = StudentDataCoach.find({
    createdBy: Meteor.userId()
  }).fetch()

  const myStudentCount = StudentDataCoach.find({createdBy: Meteor.userId()}).count()

  return {
    searchQuery,
    searching,
    myStudents,
    myStudentCount,
  };
}, ManageStudents);
