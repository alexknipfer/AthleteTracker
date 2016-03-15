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