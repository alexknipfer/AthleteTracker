
import React from 'react';

StudentFilter = React.createClass({
  componentDidMount(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  },

  render(){
    return(
      <div>
        <div className="row">
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header"><i className="material-icons">keyboard_arrow_down</i>Filter</div>
              <div className="collapsible-body filter-toggle">
                <div className="row">
                  <div className="col s12 m4 l4">
                    <button className="btn waves-effect login grey lighten-3 black-text" type="submit">Last Name</button>
                  </div>
                  <div className="col s12 m4 l4">
                    <button className="btn waves-effect login grey lighten-3 black-text" type="submit">Last Name</button>
                  </div>
                  <div className="col s12 m4 l4">
                    <button className="btn waves-effect login grey lighten-3 black-text" type="submit">GPA</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m4 l4">
                    <button className="btn waves-effect login grey lighten-3 black-text" type="submit">School</button>
                  </div>
                  <div className="col s12 m4 l4">
                    <button className="btn waves-effect login grey lighten-3 black-text" type="submit">Left Handed</button>
                  </div>
                  <div className="col s12 m4 l4">
                    <button className="btn waves-effect login grey lighten-3 black-text" type="submit">Right Handed</button>
                  </div>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>


      );
  }
});
