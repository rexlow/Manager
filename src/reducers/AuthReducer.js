//one reducer responsibles for all thing authentication
import { EMAIL_CHANGED } from './../components/actions/types';

const INITIAL_STATE = { email: ''}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload}; //make a new object, return a new state if there's a new value
    default:
      return state;
  }
};
