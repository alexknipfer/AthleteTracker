const mainRoutes = FlowRouter.group({
  name: 'mainRoutes',
});

mainRoutes.route('/', {
  action() {
    BlazeLayout.render('layout', {
      main: "login"
    });
  }
});

mainRoutes.route('/manageStudents',{
    action(){
        BlazeLayout.render('layout',{
            main: "manageStudents"
        });
    }
});