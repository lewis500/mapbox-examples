import BartData from './bart.json';
import {
  createSelector
} from 'reselect';

const BaseMapStyle = {
  "version": 8,
  "sources": {
    "osm": {
      "type": "vector",
      "tiles": ["https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-LM25tq4"]
    },
    'bart-data': {
      type: 'geojson',
      data: BartData
    }
  },
  "layers": [{
    "id": "background",
    "type": "background",
    "paint": {
      "background-color": "#EEEEEE"
    }
  }, {
    "id": "water",
    "type": "fill",
    "source": "osm",
    "source-layer": "water",
    "filter": ["==", "$type", "Polygon"],
    "paint": {
      "fill-color": "#546E7A"
    }
  }]
};

export default createSelector([
  state => state.color
], color => {
  let newBartLayer = {
    id: 'bart',
    source: 'bart-data',
    type: 'circle',
    paint: {
      'circle-radius': 8,
      'circle-color': color
    }
  };
  let newLayersArray = BaseMapStyle.layers.concat(newBartLayer);
  return {
    ...BaseMapStyle,
    layers: newLayersArray,
  };
});
