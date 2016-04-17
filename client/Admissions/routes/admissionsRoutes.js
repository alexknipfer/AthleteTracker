import React from 'react';
import { mount } from 'react-mounter';
import Layout from '../../common/components/Layout/Layout.js';
import EnrolledStudents from '../components/EnrolledStudents/EnrolledStudents.js';
import AddEnrolledStudent from '../components/EnrolledStudents/AddEnrolledStudent.js';

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

admissionsRoutes.route('/addEnrolledStudent',{
    action(){
        mount(Layout,{
            content: <AddEnrolledStudent />
        });
    }
});
