ManageStudents = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("students");
    return {
      loading: !handle,
      myStudents: StudentDataCoach.find({
        createdBy: Meteor.userId()
      }).fetch()
    };
  },

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    }
    
    else if(Meteor.loggingIn()){
      return (
        <Loading />
      );
    }

    else if (Meteor.user()) {
      return (
        <div>
             <div className="row">
                <div col="s12 m8 l8">
                  <h1>Manage Athletes</h1>
                </div>
                <div col="s12 m4 l4">
                  <a className="btn-floating btn-large waves-effect waves-light red right float-button" href="/AddStudentCoach"><i className="material-icons">add</i></a>
                </div>
              </div>
              
              <StudentCard studentData={this.data.myStudents} />
              
            </div>
      );
    }
    else {
      return (<Unauthorized />);
    }
  }
});