import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <GoogleMapReact
        center={{ lat: this.props.coordinates.lat, lng: this.props.coordinates.lng }}
        zoom={8}
        style={{ height: '400px' }}
      >
  
      </GoogleMapReact>
    );
  }

}

export default connect(
  (state) => {
    return state;
  }
)(Map3);