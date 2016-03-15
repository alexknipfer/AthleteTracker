Email = React.createClass({
  //render
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
            <span className="title"><h4>Currently viewing all emails for student name</h4></span>
          </li>
          <li className="collection-item avatar">
            <span className="title"><strong> 1/1/2016</strong></span>
            <p>Subject: Email Subject Goes Here <br></br>
               Text:   Email body goes here <br></br>
            </p>
            <br></br>
          </li>
          <li className="collection-item avatar">
            <span className="title"><strong> 1/2/2016</strong></span>
            <p>Subject: Email Subject Goes Here <br></br>
               Text:   Email body goes here <br></br>
            </p>
            <br></br>
          </li>
          <li className="collection-item avatar">
            <span className="title"><strong> 1/3/2016</strong></span>
            <p>Subject: Email Subject Goes Here <br></br>
               Text:   Email body goes here <br></br>
            </p>
            <br></br>
          </li>
          <li className="collection-item avatar">
            <span className="title"><strong> 1/4/2016</strong></span>
            <p>Subject: Email Subject Goes Here <br></br>
               Text:   Email body goes here <br></br>
            </p>
            <br></br>
          </li>
        </ul>
     </div>
    );
  }
});