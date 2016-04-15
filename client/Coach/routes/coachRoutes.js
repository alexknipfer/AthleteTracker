import React from 'react';
import { mount } from 'react-mounter';
import Layout from '../../common/components/Layout/Layout.js';
import Email from '../components/Email/Email.js';
import AddAdmissions from '../components/ManageAdmissions/AddAdmissions.js';
import CurrentAdmissions from '../containers/currentAdmissions.js';
import AddStudentCoach from '../components/ManageStudents/AddStudentCoach.js';
import ManageStudents from '../containers/manageStudents.js';
import Profile from '../containers/profile.js';
import Schools from '../containers/schools.js';
import AddSchool from '../components/Schools/AddSchool.js';
import EditStudent from '../../Coach/containers/editStudent.js';

const coachRoutes = FlowRouter.group({
  name: 'coachRoutes',
});

coachRoutes.route('/manageStudents',{
    action(){
        mount(Layout,{
            content: <ManageStudents />
        });
    }
});

coachRoutes.route('/AddStudentCoach',{
  action(){
    mount(Layout,{
      content: <AddStudentCoach />
    });
  }
});

coachRoutes.route('/AddSchool',{
  action(){
    mount(Layout,{
      content: <AddSchool />
    });
  }
});

coachRoutes.route('/schools', {
  action(){
    mount(Layout,{
      content: <Schools />
    });
  }
});

coachRoutes.route('/email', {
  action(){
    mount(Layout,{
      content: <Email />
    });
  }
});

coachRoutes.route('/profile', {
  action(){
    mount(Layout,{
      content: <Profile />
    });
  }
});

coachRoutes.route('/currentAdmissions', {
  action(){
    mount(Layout,{
      content: <CurrentAdmissions />
    });
  }
});

coachRoutes.route('/addAdmissions', {
  action(){
    mount(Layout,{
      content: <AddAdmissions />
    });
  }
});

coachRoutes.route('/editAthlete/:_id', {
  action(){
    mount(Layout,{
      content: <EditStudent />
    });
  }
});
