import React, {
  Component
} from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import {
  diff
} from 'mapbox-gl-style-spec';

export default class MapGL extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGV3aXM1MDAiLCJhIjoiY2l0Z2V3ZWRhMDBsbjJvbWs4cHVvNzdrdSJ9.7d92mc2FzeKfYeraoLIljg';
    this.mapGL = new mapboxgl.Map({
      style: this.props.style,
      center: [-122.4194, 37.7749],
      zoom: 10,
      container: this.refs.mapGL
    });
    this.oldStyle = this.props.style;
  }

  componentDidUpdate() {
    if (this.oldStyle) {
      let changes = diff(this.oldStyle, this.props.style);
      for (let c of changes) this.mapGL[c.command].apply(this.mapGL, c.args);
      this.oldStyle = this.props.style;
    }
  }

  render() {
    return (
      <div 
        className='mapGL'
        ref="mapGL">
      </div>
    );
  }
};
