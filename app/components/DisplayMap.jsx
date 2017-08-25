var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var DisplayMap = React.createClass({
  renderMap: function () {

    if (this.props.location.city) {
      console.log('TRYING!');
      var lat = this.props.coordinates.lat;
      var lng = this.props.coordinates.lng;

      var url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=8&size=400x400&key=AIzaSyAHArhvGxJpWsb2S-0zCXb0bIPt4Mv_6lc`

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
  getCoordinates: function (userLocation) {
    let { dispatch } = this.props;
    let city = userLocation.city;

    var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
    axios.get(query)
      .then((res) => {
        dispatch(actions.setCoords(res.data.results[0].geometry.location));
      })
      .catch((err) => {
        console.log(err)
      })
  },
  onFormSubmit: function (e) {
    e.preventDefault();

    let {dispatch} = this.props;
    
    let location = {city: this.refs.location.value};

    dispatch(actions.setLocation(location));
    this.getCoordinates(location);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input ref="location" type="text" />
          <button classLocation="btn" type="submit"> Enter </button>
        </form>

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