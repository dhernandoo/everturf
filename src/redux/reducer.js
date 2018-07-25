import { combineReducers } from 'redux';
import leads from './reducers/leads';
import authUser from './reducers/authUser';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  leads,
  authUser,
  common,
  router: routerReducer
});