var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = React.createClass({
  render: function () {
    return (
      <div>
        <IndexLink to="/" className="nav-link"> Home </IndexLink>
        <Link to="/login" className="nav-link"> Login </Link>
      </div>
    );
  }
});

module.exports = Navigation;