//@flow
import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import ColorPicker from './color-picker';
import MapGL from './mapGL';
import getStyle from 'get-style';

class Main extends Component {
  state = {
    color: '#03A9F4'
  };

  colors = [
    '#03A9F4',
    '#FF5722',
    '#E91E63'
  ];

  pickColor = (color) => {
    this.setState({
      color
    });
  }

  render() {
    return (
      <div>
        <MapGL
          style={getStyle(this.state)}
          />
        <ColorPicker
          pickColor={this.pickColor}
          colors={this.colors}
          />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
