import React, { PropTypes, Component } from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { MapMarkerStyle } from './map_marker_style.js';

export default class MapMarker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div style={MapMarkerStyle}>
        {this.props.text}
      </div>
    );
  }
}