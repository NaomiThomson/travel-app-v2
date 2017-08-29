var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Itinerary = React.createClass({
  render: function () {
    return (
      <div>
        Hey
    </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Itinerary);