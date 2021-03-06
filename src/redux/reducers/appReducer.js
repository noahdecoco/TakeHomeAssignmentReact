import { combineReducers } from 'redux'
import {actions} from '../actions/appActions';

const loading = (state = { isLoading: false, text: "" }, action) => {
  switch (action.type) {
    case actions.displayLoading:
      return {
        ...state,
        isLoading: true,
        text: action.text,
      };
    case actions.hideLoading:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default combineReducers({loading});
