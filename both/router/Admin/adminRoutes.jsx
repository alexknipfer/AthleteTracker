const adminRoutes = FlowRouter.group({
  name: 'adminRoutes',
});


adminRoutes.route('/currentCoaches',{
    action(){
        ReactLayout.render(Layout,{
            content: <CurrentCoaches />
        });
    }
});

adminRoutes.route('/addCoach',{
    action(){
        ReactLayout.render(Layout,{
            content: <AddCoach />
        });
    }
});