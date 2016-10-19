import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

//below are states that will be maintained by respective reducers
export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
