var React = require('react');
import GoogleMapReact from 'google-map-react';
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');
import MapMarker from './MapMarker.jsx';


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

  renderImage: function () {

    if (this.props.journeyInfo.hasFile) {
      return (
        <div>
          <img src={`https://powerful-cliffs-81990.herokuapp.com/files/journey/${this.props.routeParams.id}`}
            style={{ height: '200px' }} />
        </div>
      )
    } else {
      return (
        <div>
          no image
          {/*<img src="../../public/images/traveler.jpg" />*/}
        </div>
      )
    }
  },

  renderEntries: function () {
    let { journeyInfo } = this.props;
    let entriesList = [];

    if (this.props.journeyInfo._id === this.props.routeParams.id) {

      return journeyInfo.entries.map(function (entry) {
        return (
          <div>
            <li className="collection-item">{entry.entryText}</li>
            
          </div>
        )
      })
    }
  },

  renderMarkers: function () {
    let { journeyInfo } = this.props

    let count = 0;

    return journeyInfo.entries.map(function (entry) {
      count ++;
      return (
        <MapMarker lat={entry.lat} lng={entry.lng} text={count}/>
      )
    })
  },

  render: function () {
    let { journeyInfo, coordinates } = this.props;

    if (!journeyInfo.destination) {
      return (
        <div> Loading... </div>
      )
    } else {

      return (
        <div style={{ marginTop: "100px" }} className="wrapper">
          <div className="row">
            <div className="col s12 m6">
              <h1>{journeyInfo.title}! </h1>
            </div>
            <div className="col s12 m6">
              <h4>Destination: {journeyInfo.destination}</h4>
              <p>Start: {journeyInfo.startDate.split('T')[0]}</p>
              <p>End: {journeyInfo.endDate.split('T')[0]}</p>
            </div>
         
          </div>
          <div className="row">
            <div className="col s12 m6">
              <GoogleMapReact
                center={{ lat: coordinates.lat, lng: coordinates.lng }}
                zoom={12}
                style={{ height: '400px', position: 'relative !important' }}>

                {this.renderMarkers()}
              </GoogleMapReact>
            </div>
            <div className="col s12 m6">
              <ol className="collection">
                {this.renderEntries()}
              </ol>  
            </div>
          </div>

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