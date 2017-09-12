var React = require('react');
var { Link, IndexLink } = require('react-router');

import Navigation from 'Navigation';

var Main = (props) => {
  return (

    <div className="container-fluid">
      <Navigation />
      {/*<img src="./images/landing.jpg" style={{ width: "100%", position: "fixed" }} />*/}

      <div className="container">
        {props.children}
      </div>

    </div>

  );
}

module.exports = Main;