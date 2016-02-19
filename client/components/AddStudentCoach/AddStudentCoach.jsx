AddStudentCoach = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    
    const firstname = this.refs.firstname.value;
    const middleInitial = this.refs.middleInitial.value;
    const lastname = this.refs.lastname.value;
    const school = this.refs.school.value;
    const gpa = this.refs.gpa.value;
    const act = this.refs.act.value;
    const sat = this.refs.sat.value;
    
    Meteor.call("AddStudentData", {firstname, middleInitial, lastname,school, gpa, act, sat}, (error) => {
        if(error){
          Bert.alert(error.reason, "danger");
        }
        
        else{
          FlowRouter.go("/manageStudents");
          Bert.alert( 'Student added successfully!', 'success', 'growl-top-right' );
        }
      });
    
  },
  
  render(){
    if(Meteor.user()){
      return(
        <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-content black-text">
              <span className="card-title">Add Athlete</span>
    
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col s12 m5 l5">
                    <input type="text" ref="firstname" className="validate" placeholder="First Name" minLength={2} required />
                  </div>
                  
                  <div className="col s12 m1 l1">
                    <input type="text" ref="middleInitial" className="validate" placeholder="MI" maxLength={1} required />
                  </div>
                  
                  <div className="col s12 m6 l6">
                    <input type="text" ref="lastname" className="validate" placeholder="Last Name" minLength={2} required />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="school" className="validate" placeholder="Current School" minLength={2} required />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="gpa" className="validate" placeholder="GPA" minLength={2} required />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="act" className="validate" placeholder="ACT" minLength={2} required />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12">
                    <input type="text" ref="sat" className="validate" placeholder="SAT" minLength={2}/>
                  </div>
                </div>
    
                <button className="btn waves-effect login" type="submit">Add Athlete</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
      );
    }
    
    else{
      return(<Unauthorized />);
    }
  }
});