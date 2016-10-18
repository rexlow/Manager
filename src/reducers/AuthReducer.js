//one reducer responsibles for all thing authentication
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './../components/actions/types';

const INITIAL_STATE = { email: '', password: ''}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload}; //make a new object, return a new state if there's a new value
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload};
    default:
      return state;
  }
};
