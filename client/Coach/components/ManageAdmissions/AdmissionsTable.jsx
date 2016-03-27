AdmissionsTable = React.createClass({
    removeAdmissions(id, firstname, lastname) {
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
            {this.props.admissionsData.map((admissions) =>{
            return(
              <tr key={admissions._id}>
                  <td>{admissions.username}</td>
                  <td>{admissions.firstname}</td>
                  <td>{admissions.lastname}</td>
                  <td>{admissions.emails[0].address}</td>
                  <td><a href="#"><i className="material-icons red-text" onClick={this.removeAdmissions.bind(null, admissions._id, admissions.firstname, admissions.lastname)}>delete_forever</i></a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
  }
});