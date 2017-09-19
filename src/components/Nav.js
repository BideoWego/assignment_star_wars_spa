import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';


const Nav = () => (
  <div className="Nav">
    <Router>
      <div>
        <div className="pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">Star Wars</Link>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link to="/films" className="pure-menu-link">Films</Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/people" className="pure-menu-link">People</Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/planets" className="pure-menu-link">Planets</Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/species" className="pure-menu-link">Species</Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/starships" className="pure-menu-link">Starships</Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/vehicles" className="pure-menu-link">Vehicles</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" render={ () => <h1>Hello Star Wars!</h1> } />
          <Route exact path="/films" render={ () => <h1>Films</h1> } />
          <Route exact path="/people" render={ () => <h1>People</h1> } />
          <Route exact path="/planets" render={ () => <h1>Planets</h1> } />
          <Route exact path="/species" render={ () => <h1>Species</h1> } />
          <Route exact path="/starships" render={ () => <h1>Starships</h1> } />
          <Route exact path="/vehicles" render={ () => <h1>Vehicles</h1> } />
          <Route render={ () => <h1 className="text-danger">404 Not Found</h1> } />
        </Switch>
      </div>
    </Router>
  </div>
);




export default Nav;













