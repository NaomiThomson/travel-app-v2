var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var ItineraryLink = React.createClass({
  setCurrentItinerary: function () {
    let {dispatch, _id, _creator, endDate, startDate, location} = this.props;

    dispatch(actions.setCurrentItinerary({
      _id,
      _creator,
      endDate,
      startDate,
      location
    }));
  },
  render: function () {

    let itineraryLink = "/itinerary/" + this.props._id;

    return (
      <div>
        <Link to={itineraryLink} className="nav-link" onClick={this.setCurrentItinerary}>
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