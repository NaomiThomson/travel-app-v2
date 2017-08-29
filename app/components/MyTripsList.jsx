var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var MyTripsList = React.createClass({
  componentWillMount: function () {
    this.getMyTrips();
  },
  getMyTrips: function () {
    let {dispatch, sessionInfo} = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.get('https://powerful-cliffs-81990.herokuapp.com/itinerary/me', headerConfig)
    .then((res) => {
      dispatch(actions.setMyTripsList(res.data.itinerary));
    })
    .catch((err) => {
      console.log('coming from get trips ' + err)
    });

  },
  render: function() {
    let {myTripsList} = this.props;

    if (myTripsList.length > 0) {
      return (
        <ul>
          {myTripsList.map(function (trip, index) {
            return <li key={index}>{trip.location}</li>
          })}
        </ul>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }

  }
});

export default connect(
  (state) => {
    return state;
  }
)(MyTripsList);