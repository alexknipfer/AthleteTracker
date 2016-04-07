import React from 'react';
import { mount } from 'react-mounter';
import Layout from '../../common/components/Layout/Layout.js';

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
