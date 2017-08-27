var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var CreateItinerary = React.createClass({
  onClick: function (e) {
    e.preventDefault();

    let { dispatch } = this.props;

    let payload =
      {
        startDate: this.refs.startdate.value,
        endDate: this.refs.enddate.value,
        location: this.refs.location.value
      };

    axios.post('https://powerful-cliffs-81990.herokuapp.com/itinerary', payload)
    .then((res) => {
      let tripDetails = {
        startDate: res.data.startDate,
        endDate: res.data.endDate,
        location: res.data.location,
        id: res.data._id
      }
      dispatch(actions.setTripDetails(payload));
      this.props.history.push('/map');
    })
    .catch((e) => {
      console.log(e)
    });
    
  },
  render: function () {
    return (
      <div>
        Location
        <form>
          <input ref="location" type="text" />
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