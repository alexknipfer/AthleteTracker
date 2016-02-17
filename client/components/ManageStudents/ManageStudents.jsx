ManageStudents = React.createClass({
   render(){
     if(Meteor.user()){
       return (
            <div>
             <div className="row">
                <div col="s12 m8 l8">
                  <h1>Manage Athletes</h1>
                </div>
                <div col="s12 m4 l4">
                  <a className="btn-floating btn-large waves-effect waves-light red right float-button"><i className="material-icons">add</i></a>
                </div>
              </div>
            
              <div className="row">
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/davemiller.jpg" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Student Name<i className="material-icons right">reorder</i></span>
                      <p><a href="#">Email Student</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                      <ul>
                        <li>ACT:</li>
                        <li>SAT:</li>
                        <li>GPA:</li>
                        <li>High School:</li>
                        <li>Coach:</li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/davemiller.jpg" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Student Name<i className="material-icons right">reorder</i></span>
                      <p><a href="#">Email Student</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                      <ul>
                        <li>ACT:</li>
                        <li>SAT:</li>
                        <li>GPA:</li>
                        <li>High School:</li>
                        <li>Coach:</li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/davemiller.jpg" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Student Name<i className="material-icons right">reorder</i></span>
                      <p><a href="#">Email Student</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                      <ul>
                        <li>ACT:</li>
                        <li>SAT:</li>
                        <li>GPA:</li>
                        <li>High School:</li>
                        <li>Coach:</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="row">
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/davemiller.jpg" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Student Name<i className="material-icons right">reorder</i></span>
                      <p><a href="#">Email Student</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                      <ul>
                        <li>ACT:</li>
                        <li>SAT:</li>
                        <li>GPA:</li>
                        <li>High School:</li>
                        <li>Coach:</li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/davemiller.jpg" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Student Name<i className="material-icons right">reorder</i></span>
                      <p><a href="#">Email Student</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                      <ul>
                        <li>ACT:</li>
                        <li>SAT:</li>
                        <li>GPA:</li>
                        <li>High School:</li>
                        <li>Coach:</li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/davemiller.jpg" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Student Name<i className="material-icons right">reorder</i></span>
                      <p><a href="#">Email Student</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Student Name<i className="material-icons right">close</i></span>
                      <ul>
                        <li>ACT:</li>
                        <li>SAT:</li>
                        <li>GPA:</li>
                        <li>High School:</li>
                        <li>Coach:</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
     }
     else{
       return (<h1>Not Authorized</h1>);
     }
   } 
});