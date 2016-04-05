const commonRoutes = FlowRouter.group({
  name: 'commonRoutes',
});

if (Accounts._resetPasswordToken) {
  Session.set('resetPassword', Accounts._resetPasswordToken);
}

commonRoutes.route('/', {
  action() {
    ReactLayout.render(Layout, {
      content: <Login />
    });
  }
});

commonRoutes.route('/changePassword', {
  action(){
    ReactLayout.render(Layout, {
      content: <ChangePassword />
    });
  }
});

commonRoutes.route('/forgotPassword', {
  action(){
    ReactLayout.render(Layout, {
      content: <ForgotPassword/>
    });
  }
});

commonRoutes.route('/reset-password:token', {
  action(){
    ReactLayout.render(Layout, {
      content: <ResetPassword/>
    });
  }
});
