Schools = React.createClass({
  render(){
    return (
     <div>
        <div className="row">
          <div col="s12 m4 l4">
            <a className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1" href="/AddSchool"><i className="material-icons">add</i></a>
          </div>
        </div>
        <ul class="collection">
          <li class="collection-item avatar">
            <span class="title"><strong> Fen Creek High School</strong></span>
            <p>Phone Number: 314-999-9000 <br></br>
               Coach Name:   Steven Lewis <br></br>
               <a href="#!" class="secondary-content"><i class="material-icons">View All Fen Creek Recruits</i></a>
            </p>
            <br></br>
          </li>
          <li class="collection-item avatar">
            <span class="title"><strong> Broadway Academy</strong></span>
            <p>Phone Number: 636-555-4433 <br></br>
               Coach Name:   Brad Williams <br></br>
               <a href="#!" class="secondary-content"><i class="material-icons">View All Broadway Academy Recruits</i></a>
            </p>
            <br></br>
          </li>
          <li class="collection-item avatar">
            <span class="title"><strong> St. Charles High School</strong></span>
            <p>Phone Number: 636-777-0008 <br></br>
               Coach Name:   Chris Jacobs <br></br>
               <a href="#!" class="secondary-content"><i class="material-icons">View All St. Charles High School Recruits</i></a>
            </p>
            <br></br>
          </li>
          <li class="collection-item avatar">
            <span class="title"><strong> East City High School</strong></span>
            <p>Phone Number: 134-334-7777 <br></br>
               Coach Name:   John Palmer <br></br>
               <a href="#!" class="secondary-content"><i class="material-icons">View All East City High School Recruits</i></a>
            </p>
            <br></br>
          </li>
        </ul>
     </div>
    );
  }
});