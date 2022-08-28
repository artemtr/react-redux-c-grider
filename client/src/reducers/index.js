import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import reducer from './streams';
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: reducer,
});
