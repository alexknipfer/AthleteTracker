Schools = React.createClass({
  render(){
    return (
     <div>
        <div className="row">
          <div col="s12 m4 l4">
            <a className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1" href="/AddSchool"><i className="material-icons">add</i></a>
          </div>
        </div>
        <ul className="collection">
          <li className="collection-item avatar">
            <span className="title"><strong> Fen Creek High School</strong></span>
            <p>Phone Number: 314-999-9000 <br></br>
               Coach Name:   Steven Lewis <br></br>
            </p>
            <br></br>
          </li>
          <li className="collection-item avatar">
            <span className="title"><strong> Broadway Academy</strong></span>
            <p>Phone Number: 636-555-4433 <br></br>
               Coach Name:   Brad Williams <br></br>
            </p>
            <br></br>
          </li>
          <li className="collection-item avatar">
            <span className="title"><strong> St. Charles High School</strong></span>
            <p>Phone Number: 636-777-0008 <br></br>
               Coach Name:   Chris Jacobs <br></br>
            </p>
            <br></br>
          </li>
          <li className="collection-item avatar">
            <span className="title"><strong> East City High School</strong></span>
            <p>Phone Number: 134-334-7777 <br></br>
               Coach Name:   John Palmer <br></br>
            </p>
            <br></br>
          </li>
        </ul>
     </div>
    );
  }
});