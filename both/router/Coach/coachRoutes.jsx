const coachRoutes = FlowRouter.group({
  name: 'coachRoutes',
});

coachRoutes.route('/manageStudents',{
    action(){
        ReactLayout.render(Layout,{
            content: <ManageStudents />
        });
    }
});

coachRoutes.route('/AddStudentCoach',{
  action(){
    ReactLayout.render(Layout,{
      content: <AddStudentCoach />
    });
  }
});

coachRoutes.route('/AddSchool',{
  action(){
    ReactLayout.render(Layout,{
      content: <AddSchool />
    });
  }
});

coachRoutes.route('/schools', {
  action(){
    ReactLayout.render(Layout,{
      content: <Schools />
    });
  }
});

coachRoutes.route('/email', {
  action(){
    ReactLayout.render(Layout,{
      content: <Email />
    });
  }
});