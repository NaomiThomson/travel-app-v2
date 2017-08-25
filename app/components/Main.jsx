var React = require('react');
var {Link, IndexLink} = require('react-router');

import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <Navigation/>
      </div>
      
      <IndexLink to="/" className="nav-link">
        <h1 className="title animated fadeIn"> Travel App </h1>
      </IndexLink>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;