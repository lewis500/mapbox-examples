import BartData from './bart.json';
import BaseMapStyle from './base-style.json';
import {
  createSelector
} from 'reselect';

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
  let newBartSource = {
    type: 'geojson',
    data: BartData
  };
  let newLayersArray = [
    ...BaseMapStyle.layers,
    newBartLayer
  ];
  let newSourcesObject = {
    ...BaseMapStyle.sources,
    'bart-data': newBartSource
  };
  return {
    ...BaseMapStyle,
    layers: newLayersArray,
    sources: newSourcesObject
  };
});
