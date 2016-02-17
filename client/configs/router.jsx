const mainRoutes = FlowRouter.group({
  name: 'mainRoutes',
});

mainRoutes.route('/', {
  action() {
    ReactLayout.render(Layout, {
      content: <Login />
    });
  }
});

mainRoutes.route('/manageStudents',{
    action(){
        ReactLayout.render(Layout,{
            content: <ManageStudents />
        });
    }
});