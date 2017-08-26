var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var DisplayMap = React.createClass({
  renderMap: function () {

    if (this.props.tripDetails.destination) {

      this.getCoordinates();

      var lat = this.props.coordinates.lat;
      var lng = this.props.coordinates.lng;

      var url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=400x400&key=AIzaSyAHArhvGxJpWsb2S-0zCXb0bIPt4Mv_6lc`

      return (
        <div>
          <img src={url} />
        </div>
      )
    } else {
      return (
        <div>
          Enter a location to bring up its map!
        </div>
      )
    }
  },
  getCoordinates: function () {
    let { dispatch } = this.props;
    let destination = this.props.tripDetails.destination;

    var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
    axios.get(query)
      .then((res) => {
        dispatch(actions.setCoords(res.data.results[0].geometry.location));
      })
      .catch((err) => {
        console.log(err)
      })
  },
  render: function () {
    return (
      <div>
        {this.renderMap()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(DisplayMap);