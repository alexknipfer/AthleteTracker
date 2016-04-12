import React from 'react';
import { mount } from 'react-mounter';
import Layout from '../../common/components/Layout/Layout.js';
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
