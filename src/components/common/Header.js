import React from 'react';
import {Link, IndexLink} from 'react-router';
import logoImage from '../../images/pluralsight-logo.png'; // eslint-disable-line

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <IndexLink to="/" activeClassName="active" className="navbar-brand">
          <img src={logoImage}/>
        </IndexLink>
        <ul className="nav navbar-nav">
          <li>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <Link to="/courses" activeClassName="active">Courses</Link>
          </li>
          <li>
            <Link to="/authors" activeClassName="active">Authors</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
