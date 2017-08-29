var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var ItineraryLink = React.createClass({
  render: function () {

    let itineraryLink = "/itinerary/" + this.props._id;

    return (
      <div>
        <Link to={itineraryLink} className="nav-link">
          <div className="card animated fadeIn">
            <div className="card-block">
              <h4 className="card-title menu-title"> {this.props.location}  </h4>
            </div>
          </div>
        </Link>
      </div>
    )
    
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ItineraryLink);