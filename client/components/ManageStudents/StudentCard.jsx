StudentCard = React.createClass({
  removeStudent(id, firstname, lastname) {

      swal({
        title: "Are you sure?",
        text: "You will not be able to recover " + firstname + " " + lastname + "!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      }, (isConfirm) => {
        //window.onkeydown = previousWindowKeyDown;
        if(isConfirm){
          swal('Deleted!', 'User has been deleted.', 'success');
          Meteor.call("removeStudent", id);
        }
        else{
          swal('Cancelled', 'Your user is safe now.', 'error');
        }
      });
    },

    render() {
      return (
        <div>
      <div className="row">
      {this.props.studentData.map((student) =>{
        return (
          <div className="col s12 m6 l4" key={student._id}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/davemiller.jpg" />
              </div>
              <div className="card-content">
              <a href="#"><i className="material-icons red-text" onClick={this.removeStudent.bind(null, student._id, student.firstname, student.lastname)}>clear</i></a>
                <span className="card-title activator grey-text text-darken-4">{student.firstname} {student.lastname}<i className="material-icons right">reorder</i></span>
                <p><a href="#">Email Student</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                <ul>
                  <li>ACT: {student.act}</li>
                  <li>SAT: {student.sat}</li>
                  <li>GPA: {student.gpa}</li>
                  <li>High School: {student.school}</li>
                  <li>Coach:</li>
                </ul>
                
              </div>
              
            </div>
          </div>
          );
        })}
        </div>
      </div>
      );
    }
});