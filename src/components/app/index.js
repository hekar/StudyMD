import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import Oneset from '../oneset'

import './skeleton.css';

// Routing
const App = () => (
  <div>
      <main>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:path_id" component={Oneset} />
          </Switch>

          <section id="footer">
              <p className="vertical-centered"> Made with&nbsp;
                  <i className="fa fa-heart" aria-hidden="true"> </i>
              &nbsp; in Switzerland</p>
          </section>
      </main>
  </div>
)

export default App
