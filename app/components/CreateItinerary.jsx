var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');
import 'react-date-picker/index.css'
import moment from 'moment'
import { DateField, Calendar } from 'react-date-picker'


var CreateItinerary = React.createClass({
  onClick: function (e) {
    e.preventDefault();


    let { dispatch, sessionInfo, tripDetails } = this.props;

    // temporarily hard coding dates
    let payload =
      {
        startDate: '2017-09-23',
        endDate: '2017-09-26',
        location: this.refs.location.value
      };

    let headerConfig = {
      headers: {'x-auth': sessionInfo.token}
    };

    axios.post('https://powerful-cliffs-81990.herokuapp.com/itinerary', payload, headerConfig)
      .then((res) => {
        let tripDetails = {
          startDate: res.data.startDate,
          endDate: res.data.endDate,
          location: res.data.location,
          id: res.data._id
        }
        dispatch(actions.setTripDetails(tripDetails));
        this.getCoordinates(); 
        this.props.history.push('/map');
      })
      .catch((e) => {
        console.log(e)
      });

  },
  getCoordinates: function () {
    let { dispatch } = this.props;
    let location = this.props.tripDetails.location;

    if (location) {
      var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
      axios.get(query)
        .then((res) => {
          dispatch(actions.setCoords(res.data.results[0].geometry.location));
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  render: function () {
    let date = '';

    return (
      <div>
        Location
        <form>
          <input ref="location" type="text" />
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