var React = require('react');
var { Link, IndexLink, hashHistory } = require('react-router');
var { connect } = require('react-redux');
var actions = require('actions');


var EditItinerary = React.createClass({
  render: function () {
    return (
      <div>
        Hello
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(EditItinerary);