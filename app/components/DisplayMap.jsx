var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

// CODE SLOWING DOWN A LOT FROM THIS COMPONENT!!!! 

var DisplayMap = React.createClass({
  componentWillMount: function () {
    let { dispatch } = this.props;

    this.getCoordinates();

    var lat = this.props.coordinates.lat;
    var lng = this.props.coordinates.lng;


    var url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=400x400&key=AIzaSyAHArhvGxJpWsb2S-0zCXb0bIPt4Mv_6lc`

    dispatch(actions.setMapURL(url));

  },
  renderMap: function () {
    if (this.props.mapURL) {
      return (
        <div>
          <img src={this.props.mapURL} />
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  },
  getCoordinates: function () {
    let { dispatch } = this.props;
    let location = this.props.tripDetails.location;

    if (location) {
      var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
      axios.get(query)
        .then((res) => {
          console.log(res.data.results[0].geometry.location)
          dispatch(actions.setCoords(res.data.results[0].geometry.location));
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