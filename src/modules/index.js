import { combineReducers } from 'redux';
import pm from './pm';
import modal from './modal';

const rootReducer = combineReducers({
  pm,
  modal,
});

export default rootReducer;
