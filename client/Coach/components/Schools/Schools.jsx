Schools = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("schools");
    return {
      loading: !handle.ready(),
      mySchools: SchoolData.find({
        createdBy: Meteor.userId()
      }).fetch()
    };
  },

  render(){
   if (this.data.loading) {
      return (
        <Loading />
      );
    }

    else if(Roles.userIsInRole(Meteor.userId(), "coach")){
      return (
       <div>
          <div className="row">
            <div col="s12 m4 l4">
              <a className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1" href="/AddSchool"><i className="material-icons">add</i></a>
            </div>
          </div>
          <ul className="collection">
            <SchoolCard schoolData={this.data.mySchools} />
          </ul>
       </div>
      );
    }

    else{
      return(<Unauthorized />);
    }
  }

});