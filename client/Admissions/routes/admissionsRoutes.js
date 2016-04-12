import React from 'react';
import { mount } from 'react-mounter';
import EnrolledStudents from '../components/EnrolledStudents/EnrolledStudents.js';

const admissionsRoutes = FlowRouter.group({
  name: 'admissionsRoutes',
});

admissionsRoutes.route('/enrolledStudents',{
    action(){
        mount(Layout,{
            content: <EnrolledStudents />
        });
    }
});
