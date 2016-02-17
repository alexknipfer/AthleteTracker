CommonNav = React.createClass({
    componentDidMount() {
        $('.button-collapse').sideNav({
            menuWidth: 210,
            edge: 'left',
            closeOnClick: true
          });
    },
    
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="cyan darken-1">
                  <div className="nav-wrapper">
                    <a href="/" className="brand-logo">LU Tracker</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    
                    <ul classNameName="right hide-on-med-and-down">
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                    </ul>
                  </div>
                </nav>
              </div>
        );
    }
});