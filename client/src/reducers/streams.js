var _ = require('lodash');
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAMS': {
      return { ...state, ..._.mapKeys(action.payload, 'id') };
      break;
    }
    case 'FETCH_STREAM': {
      return { ...state, [action.payload.id]: action.payload };
      break;
    }
    case 'CREATE_STREAM': {
      return { ...state, [action.payload.id]: action.payload };
      break;
    }
    case 'EDIT_STREAM': {
      return { ...state, [action.payload.id]: action.payload };
      break;
    }
    case 'DELETE_STREAM': {
      return _.omit(state, [action.payload]);
      break;
    }
    default: {
      return state;
    }
  }
};
