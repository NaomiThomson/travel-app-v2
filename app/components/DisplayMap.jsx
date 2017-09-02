var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');
// var Map = require('./GoogleMaps/Map');

// 
var DisplayMap = React.createClass({
  componentWillMount: function () {

    this.getCoordinates();
  },
  getCoordinates: function () {
    let { dispatch } = this.props;
    let location = this.props.tripDetails.location;

    if (location) {
      var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
      axios.get(query)
        .then((res) => {
          dispatch(actions.setCoords(res.data.results[0].geometry.location));
          this.setMapURL();
        })
        .catch((err) => {
          console.log(err)
        })
    }
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