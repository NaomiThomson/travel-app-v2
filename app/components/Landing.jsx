var React = require('react');
var { connect } = require('react-redux');
var { Link, Link } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Landing = React.createClass({
  render: function () {

    return (
      <div>
        <h3>Welcome to MyTinerary</h3>
        <h5>Browse journeys of travel enthusiasts from around the world</h5>
        <h5>Add your own journey to share with friends and family</h5> <br /> <br />
      </div>
      
    );
    
    
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Landing);