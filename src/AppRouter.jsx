// Docs:
  // - https://github.com/rackt/react-router
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md
  // - https://github.com/rackt/react-router/blob/master/docs/API.md
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md

import React from 'react';
import createHashHistory from 'history/lib/createHashHistory';
import { Router, Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Hello from 'components/pages/Hello';
import Counter from 'components/pages/Counter';
import Device from 'components/pages/Device';
import NetworkInformation from 'components/pages/NetworkInformation';

const AppRouter = (
  <Router history={createHashHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="hello" component={Hello} />
      <Route path="about" component={About} />
      <Route path="counter" component={Counter} />
      <Route path="device" component={Device} />
      <Route path="network-information" component={NetworkInformation} />
      { /* https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md#notfound-route */ }
      <Route path="*" component={Home}/>
    </Route>
  </Router>
);

export default AppRouter;
