var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var CreateItinerary = React.createClass({
  onClick: function (e) {
    e.preventDefault();

    let { dispatch } = this.props;

    let tripDetails =
      {
        destination: this.refs.destination.value,
        startdate: this.refs.startdate.value,
        enddate: this.refs.enddate.value
      };

      console.log(tripDetails);

    dispatch(actions.setTripDetails(tripDetails));
    this.props.history.push('/map');
  },
  render: function () {
    return (
      <div>
        Destination
        <form>
          <input ref="destination" type="text" />
        </form>

        Start Date
        <form>
          <input ref="startdate" type="text" />
        </form>

        End Date
        <form>
          <input ref="enddate" type="text" />
        </form>

        <button onClick={this.onClick} classLocation="btn" type="submit"> Enter </button>

      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(CreateItinerary);