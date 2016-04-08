import { createContainer } from 'meteor/react-meteor-data';
import Schools from '../components/Schools/Schools.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("schools");
  const loading = !handle.ready();

  const mySchools = SchoolData.find({
    createdBy: Meteor.userId()
  }).fetch()

  const mySchoolCount = SchoolData.find().count()

  return {
    mySchools,
    mySchoolCount
  };
}, Schools);
