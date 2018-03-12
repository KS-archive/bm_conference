// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory';
import Switch from 'react-router-dom/Switch';

// WebFont Loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// Views
import Home from './views/Home/Home';
import Committee from './views/Committee/Committee';
import Payments from './views/Payments/Payments';
import Contact from './views/Contact/Contact';
import Program from './views/Program/Program';
import Publication from './views/Publication/Publication';


// Main styles import.
import './scss/global.scss';

// WebFont Loader configuration.
const config = {
  google: {
    families: ['Roboto:300,500,900:latin,latin-ext'],
  },
};

const customHistory = createBrowserHistory();

ReactDOM.render(
  <WebfontLoader config={config}>
    <Router history={customHistory}>
      <Switch>
        <Route path={`${__PATH__}/platnosci`} component={Payments} />
        <Route path={`${__PATH__}/publikacja`} component={Publication} />
        <Route path={`${__PATH__}/organizatorzy`} component={Committee} />
        <Route path={`${__PATH__}/program`} component={Program} />
        <Route path={`${__PATH__}/kontakt`} component={Contact} />
        <Route path={`${__PATH__}/`} component={Home} />
      </Switch>
    </Router>
  </WebfontLoader>,
  document.querySelector('.container'),
);
