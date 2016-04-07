import React from 'react';
import Alert from 'react-s-alert';
import Navigation from '../../containers/navigationContainer.js';

 const Layout = ({content}) => (
   <div>

    <header>
        <Navigation />
    </header>

    <main className="container">
        {content}
    </main>

      <Alert stack={{limit: 3}} />

   </div>
 );

 export default Layout;
