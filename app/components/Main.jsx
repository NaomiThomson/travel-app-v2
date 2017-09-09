var React = require('react');
var { Link, IndexLink } = require('react-router');

import Navigation from 'Navigation';

var Main = (props) => {
  return (

    <div id="brandLogo">
      <IndexLink to="/" className="nav-link">
        <h4 className="title animated fadeIn"> Travel Recommendations Blog </h4>
      </IndexLink>

      <div className="row">
        <Navigation />
      </div>

      <div className="container" id="createContain">
        {props.children}
      </div>

    </div>

  );
}

module.exports = Main;