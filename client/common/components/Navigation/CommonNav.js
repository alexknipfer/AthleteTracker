import React from 'react';

export default class CommonNav extends React.Component{

    componentDidMount() {
        $('.button-collapse').sideNav({
            menuWidth: 210,
            edge: 'left',
            closeOnClick: true
          });
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="indigo z-depth-1">
                  <div className="nav-wrapper">
                    <a href="/" className="brand-logo bold"><i className="material-icons large left">trending_up</i>LU Tracker</a>
                  </div>
                </nav>
              </div>
        );
    }
}
