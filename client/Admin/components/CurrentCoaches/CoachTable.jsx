CoachTable = React.createClass({
    removeCoach(id, firstname, lastname) {
    let previousWindowKeyDown = window.onkeydown;
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover " + firstname + " " + lastname + "!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if(isConfirm){
          swal('Deleted!', 'Coach has been deleted.', 'success');
          Meteor.call("removeCoach", id);
        }
        else{
          swal('Cancelled', 'Your user is safe now.', 'error');
        }
      });
    },

  render(){
    return(
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.props.coachData.map((coach) =>{
            return(
              <tr key={coach._id}>
                  <td>{coach.username}</td>
                  <td>{coach.firstname}</td>
                  <td>{coach.lastname}</td>
                  <td>{coach.emails[0].address}</td>
                  <td><a href="#"><i className="material-icons red-text" onClick={this.removeCoach.bind(null, coach._id, coach.firstname, coach.lastname)}>delete_forever</i></a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
  }
});