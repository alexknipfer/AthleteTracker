import React from 'react';
import { mount } from 'react-mounter';

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
