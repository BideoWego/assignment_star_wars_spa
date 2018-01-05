import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink
} from 'react-router-dom';
import ResponseContainer from './ResponseContainer';


const Nav = () => (
  <div className="Nav">
    <Router>
      <div>
        <div className="pure-menu pure-menu-horizontal">
          <NavLink to="/" className="pure-menu-heading pure-menu-link">Star Wars</NavLink>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <NavLink to="/films" className="pure-menu-link">Films</NavLink>
            </li>
            <li className="pure-menu-item">
              <NavLink to="/people" className="pure-menu-link">People</NavLink>
            </li>
            <li className="pure-menu-item">
              <NavLink to="/planets" className="pure-menu-link">Planets</NavLink>
            </li>
            <li className="pure-menu-item">
              <NavLink to="/species" className="pure-menu-link">Species</NavLink>
            </li>
            <li className="pure-menu-item">
              <NavLink to="/starships" className="pure-menu-link">Starships</NavLink>
            </li>
            <li className="pure-menu-item">
              <NavLink to="/vehicles" className="pure-menu-link">Vehicles</NavLink>
            </li>
          </ul>
        </div>
        <ResponseContainer />
      </div>
    </Router>
  </div>
);


export default Nav;
