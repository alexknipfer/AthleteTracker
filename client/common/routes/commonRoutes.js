import React from 'react';
import { mount } from 'react-mounter';
import Login from '../components/Login/Login.js';
import ChangePassword from '../components/PasswordManagement/ChangePassword/ChangePassword.js';
import ForgotPassword from '../components/PasswordManagement/ForgotPassword/ForgotPassword.js';
import ResetPassword from '../components/PasswordManagement/ResetPassword/ResetPassword.js';
import Layout from '../components/Layout/Layout.js';
import NotFound from '../components/NotFound/NotFound.js';

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

FlowRouter.notFound = {
  action() {
      mount(Layout, {
        content: <NotFound />
      });
    }
};

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
