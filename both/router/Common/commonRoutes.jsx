const commonRoutes = FlowRouter.group({
  name: 'commonRoutes',
});

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
