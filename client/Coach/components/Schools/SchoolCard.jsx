SchoolCard = React.createClass({
  render(){
    return(
      <div>
        {this.props.schoolData.map((schools) =>{
        return (
          <li className="collection-item avatar" key={schools._id}>
            <span className="title"><strong>{schools.schoolName}</strong></span>
              <p>Phone Number: {schools.schoolPhone}<br></br>
                  Coach Name:  {schools.schoolCoach}<br></br>
              </p>
              <br></br>
          </li>
          );
        })}
      </div>
      );
  }
});
