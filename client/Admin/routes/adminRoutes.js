import React from 'react';
import { mount } from 'react-mounter';
import Layout from '../../common/components/Layout/Layout.js';
import AddCoach from '../components/CurrentCoaches/AddCoach.js';
import CurrentCoaches from '../containers/currentCoaches.js';

const adminRoutes = FlowRouter.group({
  name: 'adminRoutes',
});


adminRoutes.route('/currentCoaches',{
    action(){
        mount(Layout,{
            content: <CurrentCoaches />
        });
    }
});

adminRoutes.route('/addCoach',{
    action(){
        mount(Layout,{
            content: <AddCoach />
        });
    }
});
