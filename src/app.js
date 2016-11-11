import React, {
  Component
} from 'react';

import ColorPicker from './color-picker';
import MapGL from './mapGL';
import getStyle from 'get-style';
import './style.css';
import {
  connect
} from 'react-redux';

const mapStateToProps = state => ({
  style: getStyle(state)
});

const mapDispatchToProps = dispatch => ({
  pickColor: color => {
    dispatch({
      type: 'PICK_COLOR',
      color
    });
  }
});

const colors = [
  '#03A9F4',
  '#FF5722',
  '#E91E63'
];

const App = ({
  style,
  pickColor
}) => {
  return (
    <div>
			<MapGL
			  style={style}
			  />
			<ColorPicker
			  pickColor={pickColor}
			  colors={colors}
			  />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
