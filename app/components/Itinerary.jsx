var React = require('react');
import GoogleMapReact from 'google-map-react';
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Itinerary = React.createClass({
  componentWillMount: function () {
    let { dispatch } = this.props;
    let location = this.props.currentItinerary.location;

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

  onClick: function () {

    let { currentItinerary, sessionInfo } = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.delete(`https://powerful-cliffs-81990.herokuapp.com/itinerary/${currentItinerary._id}`, headerConfig)
      .then((res) => {
        console.log(res)
        this.props.history.push('/itineraries')
      })
      .catch((e) => {
        console.log(e)
      })

  },

  render: function () {
    let { currentItinerary } = this.props;

    return (
      <div className="wrapper">

        <div>
          <GoogleMapReact
            center={{ lat: this.props.coordinates.lat, lng: this.props.coordinates.lng }}
            zoom={8}
            style={{ height: '400px', position: 'relative !important' }}
          >

          </GoogleMapReact>
        </div><br/>
        
        {currentItinerary.location}<br />
        {currentItinerary.startDate.split('T')[0]}<br />
        {currentItinerary.endDate.split('T')[0]}<br />

        <Link to="/edit">Edit</Link>
        <button onClick={this.onClick} classLocation="btn" type="submit">Delete</button>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Itinerary);