import React from 'react';
import { mount } from 'react-mounter';

const commonRoutes = FlowRouter.group({
  name: 'commonRoutes',
});

if (Accounts._resetPasswordToken) {
  Session.set('resetPassword', Accounts._resetPasswordToken);
}

commonRoutes.route('/', {
  action() {
    mount(Layout, {
      content: <Login />
    });
  }
});

commonRoutes.route('/changePassword', {
  action(){
    mount(Layout, {
      content: <ChangePassword />
    });
  }
});

commonRoutes.route('/forgotPassword', {
  action(){
    mount(Layout, {
      content: <ForgotPassword/>
    });
  }
});

commonRoutes.route('/reset-password:token', {
  action(){
    mount(Layout, {
      content: <ResetPassword/>
    });
  }
});
