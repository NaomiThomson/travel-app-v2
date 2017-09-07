var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var JourneyLink = React.createClass({
  setCurrentJourney: function () {
    let {dispatch, _id} = this.props;

    dispatch(actions.setCurrentJourney({
      _id
    }));
  },
  render: function () {

    let JourneyLink = "/Journey/" + this.props._id;

    return (
      <div>
        <Link to={JourneyLink} className="nav-link" onClick={this.setCurrentJourney}>
          <div className="card animated fadeIn">
            <div className="card-block">
              <h4 className="card-title menu-title"> {this.props.destination}  </h4>
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
)(JourneyLink);