var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

// 
var DisplayMap = React.createClass({
  componentWillMount: function () {

    this.getCoordinates();
  },
  setMapURL: function() {
    // let {coordinates} = this.props;

    let {dispatch} = this.props;

    var lat = this.props.coordinates.lat;
    var lng = this.props.coordinates.lng;


    var url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=400x400&key=AIzaSyAHArhvGxJpWsb2S-0zCXb0bIPt4Mv_6lc`;

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