var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Recommendations = React.createClass({

  componentWillMount: function () {
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
          this.getPlacesId();
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  getPlacesId: function () {

    let { coordinates } = this.props;

    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates.lat},${coordinates.lng}&radius=500&type=restaurant&key=AIzaSyDbaq9neFNZLwne4dXgFkuLowv1buHk5zw`)
    .then((res) => {

      let places = res.data.results; 

      for (var i = 0; i < places.length; i++ ) {
        console.log(places[i].place_id)
      }
    })
    
  },

  render: function () {
    return (
      <div>
        Sup
      </div>
    )
  }

})

export default connect(
  (state) => {
    return state;
  }
)(Recommendations);