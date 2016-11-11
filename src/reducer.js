export default (state = {
  color: 'blue'
}, action) {
  switch (action.type) {
    case 'PICK_COLOR':
      return {
        color: action.color
      };
    default:
      return state;
  }
};
