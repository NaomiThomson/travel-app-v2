var React = require('react');
import GoogleMapReact from 'google-map-react';
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Journey = React.createClass({
  componentWillMount: function () {
    let { dispatch } = this.props;
    let destination = this.props.currentJourney.destination;

    if (destination) {
      var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
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

    let { currentJourney, sessionInfo } = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.delete(`https://powerful-cliffs-81990.herokuapp.com/journey/${currentJourney._id}`, headerConfig)
      .then((res) => {
        console.log(res)
        this.props.history.push('/itineraries')
      })
      .catch((e) => {
        console.log(e)
      })

  },

  render: function () {
    let { currentJourney } = this.props;

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
        
        {/*{currentJourney.destination}<br />
        {currentJourney.startDate.split('T')[0]}<br />
        {currentJourney.endDate.split('T')[0]}<br />*/}

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
)(Journey);