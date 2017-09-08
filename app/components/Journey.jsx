var React = require('react');
import GoogleMapReact from 'google-map-react';
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Journey = React.createClass({
  componentWillMount: function () {
    this.getJourneyInfo();
  },

  getJourneyInfo: function () {
    let { dispatch } = this.props;

    axios.get(`https://powerful-cliffs-81990.herokuapp.com/journey/${this.props.routeParams.id}`)
      .then((res) => {
        dispatch(actions.setJourneyInfo(res.data.journey));
        this.getCoords();
      }).catch((e) => {
        console.log(e);
      })
  },

  getCoords: function () {
    let { dispatch, journeyInfo } = this.props;

    if (journeyInfo.destination) {
      var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${journeyInfo.destination}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
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
    let { journeyInfo } = this.props;

    if (!journeyInfo.destination) {
      return (
        <div> Loading... </div>
      )
    } else {
      return (
        <div className="wrapper">

          <div>
            <GoogleMapReact
              center={{ lat: this.props.coordinates.lat, lng: this.props.coordinates.lng }}
              zoom={12}
              style={{ height: '400px', position: 'relative !important' }}
            >

            </GoogleMapReact>
          </div><br />

          {journeyInfo.title}<br />
          {journeyInfo.destination}<br />
          {journeyInfo.startDate.split('T')[0]}<br />
          {journeyInfo.endDate.split('T')[0]}<br />

        </div>
      )
    }
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Journey);