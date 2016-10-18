//one reducer responsibles for all thing authentication
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './../components/actions/types';

const INITIAL_STATE = { email: '', password: '', user: null}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload}; //make a new object, return a new state if there's a new value
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload};
    default:
      return state;
  }
};
