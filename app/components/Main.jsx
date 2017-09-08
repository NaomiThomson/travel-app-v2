var React = require('react');
var {Link, IndexLink} = require('react-router');

import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>

      <IndexLink to="/" className="nav-link">
        <h4 className="title animated fadeIn" style={{ 'font-size': '250%' }}> Travel Recommendations Blog </h4>
      </IndexLink>

      <div className="row">
        <Navigation/>
      </div>
      
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;