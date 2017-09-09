var React = require('react');
var { Link, IndexLink } = require('react-router');

import Navigation from 'Navigation';

var Main = (props) => {
  return (

    <div className="container-fluid">
      <Navigation />

      <div className="container" id="createContain">
        {props.children}
      </div>

    </div>

  );
}

module.exports = Main;