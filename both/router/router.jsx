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

mainRoutes.route('/AddStudentCoach',{
  action(){
    ReactLayout.render(Layout,{
      content: <AddStudentCoach />
    });
  }
});

mainRoutes.route('/AddSchool',{
  action(){
    ReactLayout.render(Layout,{
      content: <AddSchool />
    });
  }
});

mainRoutes.route('/schools', {
  action(){
    ReactLayout.render(Layout,{
      content: <Schools />
    });
  }
});

mainRoutes.route('/email', {
  action(){
    ReactLayout.render(Layout,{
      content: <Email />
    });
  }
});